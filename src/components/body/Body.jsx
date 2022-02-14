import React from 'react';
import './Body.css';
import Button from '../button';
import bodyimg1 from '../../assets/bodyimg1.png';
import bodyimg2 from '../../assets/bodyimg2.png';
import number1 from '../../assets/number1.png';
import number2 from '../../assets/number2.png';
import number3 from '../../assets/number3.png';
import search from '../../assets/search.png';
import sourire from '../../assets/sourire.png';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

function Body() {
    return (
        <section className='body'>
            <MDBContainer breakpoint="md">
                <MDBRow>
                    <MDBCol size='md' className='col-md-6'>
                        <h2 className='body-h2'>
                            L’article que vous recherchez
                            est dèjà dans <span style={{color: '#ffc107'}}>un commerce à proximité</span>
                        </h2>
                        <p className='body-p'>
                            Lemplette vous met en relation directe avec vos commerces locaux. 
                            La majorité des commandes en ligne effectuées se 
                            trouvent déjà probablement dans un des commerces qui vous entourent.
                        </p>
                    </MDBCol>
                    <MDBCol size='md' className='col-md-6'>
                        <img src={bodyimg1} alt='' className='img-fluid' />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <MDBContainer breakpoint="md">
                <MDBRow>
                    <MDBCol size='md' className='col-md-6'>
                        <img src={bodyimg2} alt='' className='img-fluid'/>
                    </MDBCol>
                    <MDBCol size='md' className='col-md-6'>
                        <h2 className='body-h2'>Réconcilier local & digital</h2>
                        <h3 className='body-h3'>Le ecommerce à votre porte</h3>
                        <p className='body-p'>
                            Les commerces de proximité sont beaucoup moins visibles sur internet que les géants du e-commerce, 
                            Lemplette offre aux commerçants une plateforme permettant de répondre en direct à toutes vos demandes.
                        </p>
                        <a href='/'> Contacter des commerces environnants </a>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <section className='row3'>
                <section className='text'>
                    <section className='row3-text'>
                        <h2>
                            Lemplette, c’est un panier moyen de <span style={{color: '#ffc107'}}>65 euros par clients</span>,
                            des <span style={{color: '#ffc107'}}>dizaines de demandes</span> par jour près de chez vous 
                            <span style={{color: '#ffc107'}}> 80 % de réussite</span> sur les produits que vous recherchez
                            Et c’est surtout une activité économique <span style={{color: '#ffc107'}}>locale</span>.
                        </h2>  
                    </section>
                    <h2 className='row3-text'>{'Faites une demande en ligne'}</h2>
                    <p className='row3-h2' align='left'><u>{'Comment ca marche?'}</u></p>
                    <section>
                        <img src={number1} alt='' className='number'/>
                        <p>{'Envoyez-nous une photo, un lien, une capture d’écran du produit recherché'}</p>
                        <img src={number2} alt='' className='number'/>
                        <p>{'En 24h, Les commerçants Lemplette vous garantissent une réponse sur le stock de votre produit, ou des produits similaires qui correspondent à votre recherche'}</p>
                        <img src={number3} alt='' className='number'/>
                        <p>{'Payez via Lemplette et collectez votre produit chez un commerçant proche de chez vous.'}</p>
                    </section>
                    <section className='test'>
                        <img src={search} alt='' className='img'/>
                    </section>
                    <Button styleName="orange" text="Lancer une recherche"/>
                </section>
            </section>
            <section className='row4'>
                <section className='row4-text'>
                    <h2 style={{color:'#ffc107'}}>Des commerçants engagés</h2>
                    <h2>
                        <span style={{color: '#ffc107'}}>"</span>
                        <b>C’est moins cher en ligne</b>
                        <span style={{color: '#ffc107'}}>”</span>
                    </h2>
                    <p>
                        Soyons honnête, le mythe du “c’est moins cher en ligne” 
                        n’est plus d’actualité, les marques dictent les prix en ligne et en boutique, 
                        Il est tout a fait possible de trouver des très bons prix en magasins et avec des 
                        conseils avisés d’un détaillant près de chez vous... le sourire en plus (et pas sur le carton)
                    </p>
                    <a href='/'>Déclenchez une recherche</a>
                </section>
                <section className='row4-img'>
                    <img src={sourire} alt='' className='img'/>
                </section>
            </section>
        </section>
    )
}

export default Body;