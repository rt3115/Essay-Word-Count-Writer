

export default async function testMeHarder(value){
    
    var apiCalls = 0;
    var iterations = [];
    var words = value.split(" ");
    var numIts = 3;
    
    while(numIts > 0)
    {
        var promises = words.map(async element => {
            element = element.replace(/[^a-z]/gi, '');
            if(ilegalWords.has(element)){
                return element;
            }
            if(element in dict){
                return dict[element];
            }
            try {
            var wordJson = (await (await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + element)).json());
            apiCalls++;
            //console.log(wordJson);
            
            if(wordJson[0].meanings[0].partOfSpeech === "noun" || 
            wordJson[0].meanings[0].partOfSpeech === "adjective") {
                dict[element] = wordJson[0].meanings[0].definitions[0].definition;
                return(wordJson[0].meanings[0].definitions[0].definition);
            }else{
                ilegalWords.add(element);
                return element;
            }
            } catch {
                ilegalWords.add(element);
                return element;
            }
        });

        //iteration
        words = (await Promise.all(promises)).join(' ').split(' ');
        iterations.push(words.join(" "));
        numIts--;
    }
    console.log(apiCalls);
    return iterations;
}

var dict = {};

var ilegalWords = new Set();
`to
from 
it
I
A
a
that
with
An
of
or
which
The
the
`.split('\n').forEach(n => ilegalWords.add(n));

function islegal(value){
    
}