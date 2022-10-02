import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";

const MainContentDiv = styled.div`
  flex: 1;
  background-color: #ccc;
  width: 100vw;
  min-width: calc(100vw - 10rem);
  height: 100vh;
  min-height: calc(100vh);
  color: #fff;
`;

const MainContent = () => {
  return (
    <>
      <NavBar />
      <MainContentDiv>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem eum
          doloremque ut corrupti perferendis cupiditate illum fugiat ea
          obcaecati id. Deleniti pariatur ab nostrum optio error accusamus
          commodi id unde?
        </p>
        <p>
          Quis blanditiis odio eum, assumenda non, cum temporibus dolores
          praesentium quod, delectus velit. Vel ad delectus aliquam omnis
          consectetur recusandae, laborum, officia, adipisci autem sapiente modi
          voluptatem quis voluptatum laudantium?
        </p>
        <p>
          Architecto quam rem at! Molestias atque, a laboriosam dolor ut,
          doloribus ipsum cupiditate, aliquam beatae animi ratione obcaecati
          voluptates minus sit quaerat at id. Nesciunt, omnis earum? Eius, velit
          autem.
        </p>
        <p>
          Neque culpa, voluptates distinctio animi itaque quaerat eaque quia
          inventore delectus veniam minus eius similique laborum ipsa blanditiis
          quibusdam corporis praesentium ipsum reiciendis quos. Soluta aut
          repellendus quas animi fugit.
        </p>
        <p>
          Veniam deleniti impedit magni similique, temporibus repellendus minus.
          Magni, minima! Est ea voluptate deleniti perspiciatis aspernatur
          delectus minus? Voluptatem pariatur deserunt ex deleniti. Earum cumque
          autem facilis debitis placeat. Reprehenderit!
        </p>
      </MainContentDiv>
    </>
  );
};

export default MainContent;
