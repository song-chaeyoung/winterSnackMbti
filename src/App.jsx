import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Question from "./pages/Question";
import Result from "./pages/Result";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
    @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Ownglyph_ryuttung-Rg';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2405-2@1.0/Ownglyph_ryuttung-Rg.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  body {
    background: #f1f1f1;
    font-family: "Pretendard-Regular";
    height: calc(100vh - 100px);
    position: relative;
    > * {
      position: relative;
    }
    section {
      width: fit-content;
      min-width: 390px;
      height: calc(100vh - 110px);
      padding: 0 20px;
      margin: 0 auto;
      box-shadow: 0 0 10px 0 rgba(0,0,0,0.25);
      background: #fff;
    }
  } 

`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "question",
        element: <Question />,
      },
      {
        path: `result`,
        element: <Result />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
