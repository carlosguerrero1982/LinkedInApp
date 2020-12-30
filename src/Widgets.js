import React from 'react';
import './Widgets.css';
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {

    const newsArticle = (heading,subtitle) => (

        <div className="widgets_article">
            <div className="widgets_articleLeft">
            <FiberManualRecordIcon />
            </div>
            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets_header">
                <h2>LinkedIn news</h2>
                <InfoIcon />
            </div>

            {newsArticle("NOTICIAS COVID","NUEVOS CONTAGIOS")}
            {newsArticle("NOTICIAS COVID","NUEVOS HOSPITALIZACIONES")}
            {newsArticle("NOTICIAS COVID","Inicio campaña vacunacion")}
            {newsArticle("NOTICIAS COVID","Prevención")}
            {newsArticle("BOLSA","Suben acciones Ibex")}
            {newsArticle("DEPORTES","Nuevos fichajes")}
            {newsArticle("ECONOMIA","Crece el sector IT")}

        </div>

       
    )
}

export default Widgets
