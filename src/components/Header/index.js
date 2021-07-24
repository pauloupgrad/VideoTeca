import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderTop, BoxLeft, BoxRight, ImgResponsive, Search } from './style';

export const Header = () => {

  return (

         <HeaderTop>
            <BoxLeft>
              <i class="fas fa-bars"></i>
              <ImgResponsive src="/assets/img/logo.png" alt="Logomarca VídeoTeca" />
            </BoxLeft>
            <Search>
              <input id="search" type="text" placeholder="Pesquisar ..." />
                <div className="ico_search" title="Pesquisar">
                  <i class="fas fa-search"></i>
                </div>
              </Search>
              <BoxRight>
                <Link to="/" title="Listar vídeos">
                  <i class="fas fa-video"></i>
                </Link>                  
                  <a href="#"><i class="fas fa-th"></i></a>
                  <a href="#"><i class="fas fa-bell"></i></a>
                  <a href="#">
                      <img src="/assets/img/perfil-paulo-feltz-p.jpg" alt="Avatar user" />
                  </a>
              </BoxRight>
          </HeaderTop>
      );
}