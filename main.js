const packages = [{to: 'Alf', from: 'Evan', img: 'https://www.pngmart.com/files/11/Blank-Package-PNG-Image.png', heavy: true, fragile: false, priority: true, trackingNumber: 'I863B'}, {to: 'Rex', from: 'Constance', img: 'https://www.pngmart.com/files/11/Blank-Package-PNG-Image.png', heavy: false, fragile: true, priority: false, trackingNumber: 'I845A'}, {to: 'Resno', from: 'York', img: 'https://www.pngmart.com/files/11/Blank-Package-PNG-Image.png', heavy: false, fragile: false, priority: false, trackingNumber: 'I867B'}, {to: 'Phoebe', from: 'Hilda', img: 'https://www.pngmart.com/files/11/Blank-Package-PNG-Image.png', heavy: true, fragile: true, priority: true, trackingNumber: 'I8669B'}, {to: 'Beardsley', from: 'Mom', img: 'https://www.pngmart.com/files/11/Blank-Package-PNG-Image.png', heavy: true, fragile: false, priority: true, trackingNumber: 'I829B'},
{to: 'Osald', from: 'Hugo', img: 'https://www.pngmart.com/files/11/Blank-Package-PNG-Image.png', heavy: true, fragile: false, priority: false, trackingNumber: 'Iw24B'},{to: 'Bess', from: 'Hyde', img: 'https://www.pngmart.com/files/11/Blank-Package-PNG-Image.png', heavy: false, fragile: true, priority: true, trackingNumber: 'I52YB'},{to: 'Draven', from: 'Leon', img: 'https://www.pngmart.com/files/11/Blank-Package-PNG-Image.png', heavy: true, fragile: true, priority: false, trackingNumber: 'I743N'} ]

let filtered = packages


let werewolfPackage = packages[Math.floor(Math.random() * packages.length)]
console.log(werewolfPackage)

function draw(){
  let template = ''
  filtered.forEach(p => template += /*html*/` 
  <div class="col-2 text-center">
  <img class="img-fluid" src="${p.img}" alt="" id="${p.trackingNumber}"  onclick="guess('${p.trackingNumber}')">
  <p class="text-light">${p.to} | ${p.from}</p>
</div>`)
document.getElementById('packages').innerHTML = template
}




  function filter(type){
          filtered = filtered.filter(p => p[type] == werewolfPackage[type])
          draw()
        }


        function guess(trackingNumber){
         const found = packages.find(p => p.trackingNumber == trackingNumber)
         if(found.trackingNumber == werewolfPackage.trackingNumber){
          //  window.alert('Found the wolf')
           // @ts-ignore
           document.getElementById(trackingNumber).src = 'https://pyxis.nymag.com/v1/imgs/a06/d92/e670346fc478a2704c7d17b17a8a2dc4cb-15-taylor-lautner.rsquare.w700.jpg'
         } else {
          window.alert('No Wolf')
          // @ts-ignore
          document.getElementById(trackingNumber).onclick = ''
          document.getElementById(trackingNumber).classList.add('guessed')
         }

          console.log('guessing', found)
        }


        function reset(){
          filtered = packages
          werewolfPackage = packages[Math.floor(Math.random() * packages.length)]
          draw()
        }



        // function filter(type){
        //   if(type == 'heavy'){
        //       filtered = filtered.filter(p => p.heavy == werewolfPackage.heavy)
        //     } else if(type == 'priority'){
        //         filtered = filtered.filter(p => p.priority == werewolfPackage.priority)
        //       } else {
        //           filtered = filtered.filter(p => p.fragile == werewolfPackage.fragile)
        //         }
        //         draw()
        //       }

    
        
        // function filterByHeavy(){
        //   filtered = filtered.filter(p => p.heavy == werewolfPackage.heavy)
        //   draw()
        // }




draw()