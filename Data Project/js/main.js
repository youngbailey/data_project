$(document).ready(function() {
  console.log("ready!");

//no mental illness table
$('#table_1').DataTable( {
    ajax: {
        url: 'total_data.json',
        dataSrc: ''
    },
    columns: [
      {data: 'Group'},
      {data: 'Group1'},
      {data: 'Subgroup'},
      {data: 'Mental Illness'},
      {data: 'Value'}
    ]
} );

$('#table_2').DataTable( {
    ajax: {
        url: 'veteran_geo.json',
        dataSrc: ''
    },
    columns: [
      {data: 'Vulnerable_population'},
      {data: 'Section'},
      {data: 'Long-title'},
      {data: 'Short_title'},
      {data: 'Group'},
      {data: 'Group1'},
      {data: 'Subgroup'},
      {data: 'Geography'},
      {data: 'Value'}
    ]
} );
} );


//bar chart of top mental illnesses
var chart = c3.generate({
    data: {
        columns: [
            ['Women', 125993, 6679, 10330, 30805, 2957],
            ['Men', 1023546, 61540, 224695, 230925, 161659],
            ['Overall', 1149541, 3773939, 235025, 261730]
        ],
        type: 'bar',
        colors: {
            data1: '#ff0000',
            data2: '#00ff00',
            data3: '#0000ff'
        },
        color: function (color, d) {
            // d will be 'id' when called for legends
            return d.id && d.id === 'data3' ? d3.rgb(color).darker(d.value / 150) : color;
        }
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    },
    axis: {
        x: {
            type: 'category',
            categories: ['Anxiety', 'Other Mental Illness', 'PTSD', 'Serious Mental Illness', 'Substance Abuse']
        },
        y: {
          label: 'Number of Veterans',
          position: 'outer-middle'
        }
    }
});

//pie chart of ptsd age
var chart2 = c3.generate({
  bindto: '#chart2',
    data: {
        // iris data from R
        columns: [
            ['18-44', 28.5],
            ['45-64', 39.2],
            ['65+', 32.3],
        ],
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
});

//pie chart of ptsd race
var chart3 = c3.generate({
  bindto: '#chart3',
    data: {
        // iris data from R
        columns: [
            ['AI/AN', 1],
            ['Asian', 1],
            ['Black', 19],
            ['NH/OPI', .1],
            ['White', 68],
            ['Hispanic', 7.8],
            ['Multi-Race', 1],
            ['Unknown', 2.1],
        ],
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
});

//pie chart of ptsd gender
var chart4 = c3.generate({
  bindto: '#chart4',
    data: {
        // iris data from R
        columns: [
            ['Women', 4.4],
            ['Men', 95.6],
        ],
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
});

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
