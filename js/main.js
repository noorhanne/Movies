// let landingPage = document.querySelector(".home");

// let imageArray = ["home1.jpg" , "home2.jpg" , "home3.jpg"];

// landingPage.style.backgroundImage = 'url("img/home1.jpg)';


// let randomNumber = Math.floor(Math.random() * imageArray.length );


// let randomOption = true;


// function randomizeImgs(){
//   if( randomOption === true){
//     setInterval(() => {

//       let randomNumber = Math.floor(Math.random() * imageArray.length );
    
//       landingPage.style.backgroundImage = 'url("img/'+  imageArray[randomNumber] +'")';
    
//     }, 4000);
    
//   }
// }
// randomizeImgs();

let header = document.querySelector("header");
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let logo = document.querySelector('.logo')
menuIcon.onclick = () => {
  navbar.classList.toggle("active");
}
window.onscroll = () => {
  navbar.classList.remove("active");
}
window.addEventListener('scroll', () => {
	if(scrollY > 0)
{ 
  header.classList.add("shadow") ;
  header.style.background = 'white';
  header.style.boxShadow = '0 0 4px rgb(14 55 54 / 15%)';
  logo.style.color = 'black';
  menuIcon.style.color ='black';
  const links = navbar.querySelectorAll('a');
links.forEach(link => link.style.color = 'black');
}
else if(scrollY <= 0) {
  header.classList.remove("shadow") ;
  header.style.background = 'transparent';
  logo.style.color = 'white';
  menuIcon.style.color ='white';
  const links = navbar.querySelectorAll('a');
  links.forEach(link => link.style.color = 'red');
}
});

//start tailwind css //
tailwind.config = {
	theme: {
		extend: {
			colors: {
				'main-color': '#ff2c1f',
				'text-color': '#020307',
				'bg-color': '#fff',
				'hover-main': '#fa1216',
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			screens: {
				lg: '1081px',
				md: '992px',
				sm: '775px',
				xs: '473px',
				xxs: '371px',
				xxxs: '301px',
			},
			maxWidth: {
				1000: '1000px',
			},
			spacing: {
				'80px': '80px',
			},
			fontSize: {
				'4rem': '4rem',
				'1.1rem': '1.1rem',
				'1.2rem': '1.2rem',
				'0.9rem': '0.9rem',
				'13px': '13px',
				'1.8rem': '1.8rem',
				'0.8rem': '0.8rem',
				'2rem': '2rem',
				'3rem': '3rem',
				'2.4rem': '2.4rem',
				'1.7rem': '1.7rem',
			},
			height: {
				'270px': '270px',
				'240px': '240px',
				'55px': '55px',
			},
			width: {
				'55px': '55px',
				'300px': '300px',
			},
			lineHeight: {
				'55px': '55px',
			},
			boxShadow: {
				custom: '0 0 4px rgb(14 55 54 / 15%)',
				'nav-active': '4px 4px 0 4px rgb(14 55 54 / 15%)',
			},
			borderColor: {
				social: 'rgba(2, 3, 7, 0.4)',
				'main-color': '#ff2c1f',
			},
			
		},
	},
	plugins: [],
};
// end tailwind css //