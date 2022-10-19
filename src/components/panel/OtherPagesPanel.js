import React from 'react';
import './panel.css';
import Panel from './panel'
import youth_image from '../../images/youth.jpg';
import team_image from '../../images/header-backgrounds/team.jpg';

export default function OtherPagesPanel(){
    return(
        <div className="panels-wrapper">
            <Panel 
              title="Nasza młodzież"
              imgSrc={youth_image}
              description="Prowadzimy zajęcia dla dzieci z różnych grup wiekowych. Nasi wychowankowie rozjeżdżają się po Polsce ale także całym świecie mając w sercach nasz klub, nasze miasto i miłość do piłki ręcznej. "
              buttonFunction="link"
              to="/mlodziez"
              />
            <Panel 
              title="Nasze drużyny"
              imgSrc={team_image}
              description="Drużyny naszego klubu występują w 4 różnych ligach. Od chłopców U12 aż do I ligi mężczyzn. Zespoły są prowadzone przez wyszkolonych trenerów z ogromem doświadczenia zarówno we współpracy z dziećmi jak i w drużynach seniorskich."
              buttonFunction="link"
              to="/druzyny"
              />
        </div>
    )
}