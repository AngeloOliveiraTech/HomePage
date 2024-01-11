var urlAtual = window.location.pathname;

if(urlAtual != "/curriculum.html") {
     document.getElementById('bootstrap').addEventListener("click", function(){
          window.location.href = "https://getbootstrap.com/";
     });
     
     document.getElementById('materialize').addEventListener("click", function(){
          window.location.href = "https://materializecss.com/";
     });
}

let el = document.getElementById("skills");
let options = {
     series: [{
          data: [5,5,5,4,3,3,2],
   }],
     chart: {
          type: 'bar',
          height: 200
   },
   theme: {
     palette: 'palette10' 
   },
   plotOptions: {
     bar: {
       borderRadius: 5,
       horizontal: true,
     }
   },
   dataLabels: {
     enabled: false
   },
   xaxis: {
     categories: ['.NET','PHP','CSS','SQL','NodeJS','ReactJS','Python'
     ],
   }
   };

let chart = new ApexCharts(el, options);
chart.render();

