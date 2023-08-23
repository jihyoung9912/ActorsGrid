# 👨🏼‍⚖️ Actors (Chartmetric take home challenge)


[![LinkedIn][linkedin-shield]][linkedin-url]
- [👨🏻 Leo Kim](https://github.com/jihyoung9912)    

## 🌱 Languages & Libraries
![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?&style=for-the-badge&logo=CSS3&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?&style=for-the-badge&logo=TypeScript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB.svg?&style=for-the-badge&logo=React&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

### Tools
![Git](https://img.shields.io/badge/Git-F05032.svg?&style=for-the-badge&logo=Git&logoColor=white)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)




## 📄 Description
Bring Data about famous actors from `TMDB` and show them. 
In the upper left corner, you can see the `Poularity` of the actors, and you can click to see the `details and famous works`.
The top right `search bar` allows you to search for the celebrity you want.




## 🖥 Demo

* `📼 Live Demo Site:` <a href="https://actorsofleo.netlify.app/"target="\_blank">https://actorsofleo.netlify.app/ </a>



## 🎠 Feature

#### 👩‍🌾 UI
- [x] **Global Styles**
- [x] **Reset CSS**
- [x] **Reusable FlexWrapper**
- [x] **Favicon from Chartmetric**
- [x] **User freinedly Layout**
- [x] **Responsive Design**
- [x] **Dynamic Design for mobile**
- [x] **Color Palette**
- [x] **Favicon from Chartmetric**
- [x] **Navbar Animation**
- [x] **Card Hover Animation**

#### 🧧 API
- [x] **Actors Data Fetching**
- [x] **Actors Data Fetching with Infinite Scroll with Throttling**
- [x] **Search**
- [x] **ErrorBoundary for Data Fetching**

#### 👩‍🌾 ETC
- [x] **Prettier**

#### 👨🏼‍⚖️ Need Supplement

- [ ] **Search Input Auto Complete with debounce**
- [ ] **Manage Modal State with Scoped Context**
- [ ] **Infinite Scroll Optimize**
- [ ] **Font Optimize**
- [ ] **Modal Skeleton UI**



## ❌ Probs & How I resolved 'em

🤔 Problem that the useEffect function was executed twice during the initial mount.

💡 How I resolved 'em: 
- Resolved by knowing from official documents that React runs useEffect twice in Strict Mode for purity testing.

--- 

🤔 Inefficient to separate the search page from the main page.

💡 How I resolved 'em: 
- Managed search text through `Scoped Context`to minimize prop drilling and re-rendering.
- Dynamically managed from Main Page to Search Component using context.

--- 

🤔 Difficult to write a clean code because there were many Handling exceptions.

💡 How I resolved 'em: 
- Divided the hook folder into query and util folders.
- Made a code that is `easy to read` by importing data fetching hook from query folder and infinite scroll hook from util folder

--- 


🤔 Various colors were needed, and there were many changes in the beginning.

💡 How I resolved 'em: 
- Divided background-color, box-shadow, and font-color into `color palette`
- Accessed props through ThemeProvider for `easy maintenance`

--- 


🤔 Wanted to show the size of the card components and modals in the right size for all devices.

💡 How I resolved 'em: 
- Using `media-query, rem, and %`, the appropriate UI can be viewed on all devices.

--- 


🤔 There were too many components using Flex.

💡 How I resolved 'em: 
- Created `Reusabe FlexWrapper` component to access properties to minimize duplicate code.

--- 


## 📀 Setup Locally


```bash
git clone https://github.com/jihyoung9912/ActorsGrid/
yarn install
yarn start
```



## 📚 Used packages

    "@testing-library/jest-dom": "^6.0.1",
    "@testing-library/react": "^14.0.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.5.2",
    "@types/node": "^16.18.41",
    "@types/react": "^18.2.20",
    "@types/react-dom": "^18.2.7",
    "prettier": "^3.0.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-error-boundary": "^4.0.11",
    "react-router-dom": "^6.15.0",
    "react-scripts": "5.0.1",
    "react-spinners": "^0.13.8",
    "styled-components": "^6.0.7",
    "styled-reset": "^4.5.1",
    "typescript": "^4.9.5",
    "web-vitals": "^2.1.4"


[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/leokjh/
