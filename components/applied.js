

function importAll(r) {
    let images = {};
     r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
   }
   const images = importAll(require.context('../pages/assets/company/', false, /\.(png|jpe?g|svg)$/));


export const applied = [
  {
    logo: images["meta.png"],
    company: "Meta",
    role:"ML Engineer",
    status:"Pending",
    day:"Monday"
    },

    {
        logo: images["google.png"],
        company: "Google",
        role:"Fullstack Engineer",
        status:"Accepted",
        day:"Monday"
      },

      {
        logo: images["netflix.png"],
        company: "Meta",
        role:"Security Engineer",
        status:"Pending",
        day:"Monday"
        },
    
        {
            logo: images["apple.png"],
            company: "Apple",
            role:"UI/UX Designer",
            status:"Pending",
            day:"Monday"
          },

          {
            logo: images["meta.png"],
            company: "Meta",
            role:"UI/UX  Designer",
            status:"Pending",
            day:"Monday"
            },
        
            {
                logo: images["google.png"],
                company: "Meta",
                role:"Backend Engineer",
                status:"Accepted",
                day:"Monday"
              },


  
  
  
];
