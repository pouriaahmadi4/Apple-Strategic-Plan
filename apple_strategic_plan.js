
document.querySelectorAll('.nav-link a').forEach((link) => {
   link.addEventListener('click', (event) => {
       event.preventDefault();

       document.querySelectorAll('.container').forEach((section) => {
           section.classList.remove('active');
       });

       const sectionId = link.getAttribute('href');
       const section = document.querySelector(sectionId);
       if (section){
        section.classList.add('active');
       }
   });
});

const ctx = document.getElementById('myChart');
    
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Americas', 'Europe', 'China', 'Japan', 'Rest of Asia & Pacific'],
          datasets: [{
            label: 'Revenue (%)',
            data: [41.6, 24, 20.8, 5.7, 7.9],
            borderWidth: 1,
            backgroundColor: ['#F92727', '#F4E869','#00AF91', '#944E6C', '#7393A7'],
            borderColor: '#DDD'

          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });