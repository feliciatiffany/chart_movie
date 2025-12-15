const chart = document.getElementById('myChart').getContext('2d');

// hold the Chart.js instance to make it interactive, with button and stuff
let interactiveChart;

//loading dataa
async function loadData() {
    // fetch the JSON 
    const response = await fetch('./data.json', { cache: 'no-store' });
    const data = await response.json();

    // mking scale for the bubble
    const radiusFactor = 3;

    //for later group data points by genre
    const byGenre = {};



    //loop through all 
    for (let i = 0; i < data.titles.length; i++) {
        const t = data.titles[i];
        // go to the whole object
        const x = Number(t.startYear);
        const y = Number(t.numVotes);
        const r = Number(t.averageRating) * radiusFactor;
        const genre = (t.genres && t.genres[0]) || 'Unknown';

        //go to just a string
        // avgRatings[i] = data.titles[i].averageRating; 
        // titles[i] = data.titles[i].originalTitle; 
        // numVotes[i] = data.titles[i].numVotes; 
        // startYears[i] = data.titles[i].startYear; 
        // genres[i] = (data.titles[i].genres && data.titles[i].genres[0]) ||

        // making genre array
        if (!byGenre[genre]) byGenre[genre] = [];

        // push bubble data point to the genre
        // needed to make points into one datasets
        byGenre[genre].push({
            x,
            y,
            r,
            _title: t.originalTitle,
            _year: t.startYear,
            _avgRating: t.averageRating,
            _genre: genre
        });
    }

    // convert grouped data into Chart.js datasets
    const datasets = Object.entries(byGenre).map(([genre, points]) => ({
        label: genre,   
        data: points,  
        borderWidth: 1
    }));

    // Return datasets 
    return datasets;
}

// Load data and create the chart
loadData().then(datasets => {
    interactiveChart = new Chart(chart, {
        type: 'bubble',  // use bubble chart type
        data: {
            datasets: datasets
        },
        options: {
            plugins: {
                tooltip: {
                    callbacks: {
                        // tooltip movie title
                        title: (items) => items[0]?.raw?._title ?? '',
                        // tooltip body text
                        label: (item) => {
                            const r = item.raw;
                            return [
                                `Genre: ${r?._genre}`,
                                `Start Year: ${r?._year}`,
                                `Num Votes: ${r?.y}`,
                                `Avg Rating: ${r?._avgRating}`
                            ];
                        }
                    }
                },
                // chart title
                title: {
                    display: true,
                    text: 'Start Year vs Num Votes ( Avg Rating)',
                },
                // legend info to help read with color
                legend: {
                    display: true,
                    position: 'bottom',
                }
            },
            scales: {
                // X-axis (years)
                x: {
                    type: 'linear',
                    title: {
                        display: true,
                        text: 'Start Year',
                        color: '#fff',
                    },
                    ticks: {
                        precision: 0,  
                        color: '#fff',
                        padding: 50,   // push year labels downward so bubble didn't block the years
                    }
                },
                // Y-axis (votes)
                y: {
                    type: 'linear',
                    title: {
                        display: true,
                        text: 'Num Votes'
                    },
                    beginAtZero: true
                }
            }
        }
    });
});


// genre filter buttons

// Adult genre
document.getElementById('adultBtn').addEventListener('click', () => {
    interactiveChart.data.datasets.forEach(ds => {
        ds.hidden = ds.label !== 'Adult';
    });
    interactiveChart.update();
});

// Drama genre
document.getElementById('dramaBtn').addEventListener('click', () => {
    interactiveChart.data.datasets.forEach(ds => {
        ds.hidden = ds.label !== 'Drama';
    });
    interactiveChart.update();
});

//  Comedy genre
document.getElementById('comedyBtn').addEventListener('click', () => {
    interactiveChart.data.datasets.forEach(ds => {
        ds.hidden = ds.label !== 'Comedy';
    });
    interactiveChart.update();
});

// Short genre
document.getElementById('shortBtn').addEventListener('click', () => {
    interactiveChart.data.datasets.forEach(ds => {
        ds.hidden = ds.label !== 'Short';
    });
    interactiveChart.update();
});

//Documentary genre
document.getElementById('documentaryBtn').addEventListener('click', () => {
    interactiveChart.data.datasets.forEach(ds => {
        ds.hidden = ds.label !== 'Documentary';
    });
    interactiveChart.update();
});

// Family genre
document.getElementById('familyBtn').addEventListener('click', () => {
    interactiveChart.data.datasets.forEach(ds => {
        ds.hidden = ds.label !== 'Family';
    });
    interactiveChart.update();
});

// Adventure genre
document.getElementById('adventureBtn').addEventListener('click', () => {
    interactiveChart.data.datasets.forEach(ds => {
        ds.hidden = ds.label !== 'Adventure';
    });
    interactiveChart.update();
});

// Action genre
document.getElementById('actionBtn').addEventListener('click', () => {
    interactiveChart.data.datasets.forEach(ds => {
        ds.hidden = ds.label !== 'Action';
    });
    interactiveChart.update();
});

//Unknown genre
document.getElementById('unknownBtn').addEventListener('click', () => {
    interactiveChart.data.datasets.forEach(ds => {
        ds.hidden = ds.label !== 'Unknown';
    });
    interactiveChart.update();
});

// Horror genre
document.getElementById('horrorBtn').addEventListener('click', () => {
    interactiveChart.data.datasets.forEach(ds => {
        ds.hidden = ds.label !== 'Horror';
    });
    interactiveChart.update();
});

// Crime genre
document.getElementById('crimeBtn').addEventListener('click', () => {
    interactiveChart.data.datasets.forEach(ds => {
        ds.hidden = ds.label !== 'Crime';
    });
    interactiveChart.update();
});

// Romance genre
document.getElementById('romanceBtn').addEventListener('click', () => {
    interactiveChart.data.datasets.forEach(ds => {
        ds.hidden = ds.label !== 'Romance';
    });
    interactiveChart.update();
});

// Musical genre
document.getElementById('musicalBtn').addEventListener('click', () => {
    interactiveChart.data.datasets.forEach(ds => {
        ds.hidden = ds.label !== 'Musical';
    });
    interactiveChart.update();
});

// Show only Animation genre
document.getElementById('animationBtn').addEventListener('click', () => {
    interactiveChart.data.datasets.forEach(ds => {
        ds.hidden = ds.label !== 'Animation';
    });
    interactiveChart.update();
});

// Show only Biography genre
document.getElementById('biographyBtn').addEventListener('click', () => {
    interactiveChart.data.datasets.forEach(ds => {
        ds.hidden = ds.label !== 'Biography';
    });
    interactiveChart.update();
});

// Show only Thriller genre
document.getElementById('thrillerBtn').addEventListener('click', () => {
    interactiveChart.data.datasets.forEach(ds => {
        ds.hidden = ds.label !== 'Thriller';
    });
    interactiveChart.update();
});

// Show only Fantasy genre
document.getElementById('fantasyBtn').addEventListener('click', () => {
    interactiveChart.data.datasets.forEach(ds => {
        ds.hidden = ds.label !== 'Fantasy';
    });
    interactiveChart.update();
});

// Reset: show all genres again
document.getElementById('resetBtn').addEventListener('click', () => {
    interactiveChart.data.datasets.forEach(ds => {
        ds.hidden = false;
    });
    interactiveChart.update();
});
