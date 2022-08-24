let nextquote=document.querySelector('.btn-next');
let person=document.querySelector('#author');
let quote=document.querySelector('#quote-para')

console.log(quote);


const quotes=[{
    quote: 'All writers are vain, selfish and lazy, and at the very bottom of their motives lies a mystery. Writing a book is a long, exhausting struggle, like a long bout of some painful illness. One would never undertake such a thing if one were not driven by some demon whom one can neither resist nor understand.',
    person: '~George Orwell'
},
{
    quote:'A writer is someone for whom writing is more difficult than it is for other people.',
    person:'~Thomas Mann'
},
{
    quote:'Writers and artists know that ethereal moment, when just one, fleeting something—a chill, an echo, the click of a lamp, a question—ignites the flame of an entire work that blazes suddenly into consciousness.',
    person: '~Nadine C. Keels'

},
{
    quote:'But writers and their woes: they couldnt be parted. Not for anything.',
    person:'~Naomi Wood'
},
{
    quote:'Authors must spend months, years making fantasy believable in a single work while reality runs rampant and complete chaos elsewhere.',
    person:'~Don Roff'
},
{
    quote: 'A good novel tells us the truth about its hero; but a bad novel tells us the truth about its author.',
    person:'~G.K. Chesterton'
}];

nextquote.addEventListener('click',function()
{
    let random=Math.floor(Math.random()* quotes.length);

    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
})


let images=[];
images.push('C:\Users\asadl\OneDrive\Desktop\JS Projects\Quote Genrator\books.webp');
console.log(images[0]);