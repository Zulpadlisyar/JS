// tipe data dalam dom (document object model) => dcoument, node, element, nodelist, attribute, namednodemap

// documnet => repsentasi object pada halaman web || component memiliki properti || memiliki method

console.info(document);
console.info(document.fonts); /* fonts = properti */

// node => base claass dari document, element, attribute(semua fitur yan gdimiliki node berarti dimiliki anaknya) || node memiliki properti dan method

// {/* <ul id="menu">
//         <li id="first">1</li>
//         <li id="second">2</li>
//         <li id="third">3</li>
// </ul> */}


const menu = document.getElementById("menu");
console.info(menu);

// element(biasanya seperti tag pada html) || element memiliki proerti dan method

const content = document.getElementById("content");

console.info(content.id);
console.info(content.className);
console.info(content.tagName); /* ketigs ini adalah properti */

document.getElementById("title").remove(); /* method */

// membuat element
{/* <div id="content" class="content">
</div>
 const content = document.getElementById("content");

 const title = document.createElement("h1");
 title.textContent = "Test";
 content.appendChild(title) */}

//  node list (kumpulan dari node) || live => perubahahn salah satu element akan merubah semua nodelist, static =>


// attribute representasi dari element(key nama attribute & value nama valu attribute)

// namenodemap => kumpulan dari attribut

// text node => text tanpa tag

// event handler => kemampua untuk bereaksi terhadap kejadian 
// event targer dan event global handler
// event target => parent ddari node 

const clickme = document.getElementById("clickme");
clickme.addEventListener("click", function (){
    clickme.setAttribute("value", "you alredy cluck me")
})

// global event => hanya dapat menambakn satu event

// jenis jenis event => 
// text content => dapat melihat semua isi tag  
// inner text => bisa mengubah sebuah isi tag
// inner html => dapat mengubah tag dan isi

// window => objecct 

// node type => untuk mengcek tipe dari node