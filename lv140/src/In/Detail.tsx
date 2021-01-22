import React from 'react';

class Detail extends React.Component<any, any> {
    constructor(props: any) {
        super(props);


        this.state = {
            id: this.props.match.params.id,
        }

    }


    render() {
        return (
            <>
                {/* <div className="jumbotron">
                    <img src={"../img/details/" + this.state.id + ".jpg"} />
                   
                </div> */}

                <div  className="jumbotron" style={{ 
 
  backgroundImage: "url(../img/details/"+ this.state.id+".jpg)" ,
  backgroundRepeat: 'no-repeat',
  width:'100%',
  backgroundPosition: 'center',
  backgroundSize: 'cover'
}}>
</div>



                <h1 className="title">Nos gusta Correos</h1>

                <div className="container">
                    <div className="container-detail">
                        
                        
                        
                        <div className="row">
                            <div className="col">
                                <div className="row pt-3"><a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" /></svg> LISTADO</a>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-2">
                            </div>
                            <div className="col-8">
                                <img className="logo-desktop" alt={this.state.id} title={this.state.id} src={"../img/logos/" + this.state.id + "2.png"} />
                            </div>
                            <div className="col-2">
                            </div>
                        </div>


                        <div className="row mt-5">
                            <div className="col-lg-2">
                            </div>
                            <div className="col-lg-8">
                                <p>El servicio postal es un sistema dedicado a transportar documentos escritos, así como paquetes de tamaño pequeño o mediano (encomiendas) alrededor del mundo. Todo envío a través del sistema postal es llamado correo o correspondencia. Los paquetes y las cartas son "envíos postales" que se pueden transportar por tierra, mar, o aire, cada uno con tarifas diferentes dependiendo de la duración de la entrega y el peso.
                                Un sistema postal puede ser privado o estatal. Los sistemas privados a menudo tienen impuestas restricciones por parte de los gobiernos.
                                El 9 de octubre se celebra internacionalmente el Día Mundial del Correo, conmemorando la fundación de la Unión Postal Universal (UPU, por sus siglas en inglés) en el año 1874.1 La comunicación por medio de documentos escritos enviados de un punto a otro con un intermediario data desde aproximadamente la invención de la escritura. Sin embargo, el desarrollo del sistema postal formal surgió mucho más tarde. Los primeros usos documentados de un sistema organizado provienen de Egipto, donde los faraones utilizaban mensajeros para la difusión de sus decretos en el territorio del estado (2400 a. C.). El egiptólogo Gaston Maspero halló, al descifrar ciertos jeroglíficos, que estos eran referencias claras a los correos del faraón. Esta práctica muy probablemente tenga sus raíces en una práctica anterior de mensajería oral.</p>
                            </div>
                            <div className="col-lg-2">
                            </div>
                        </div>



                        <div className="row mt-5">
                            <div className="col-lg-2">
                            </div>
                            <div className="col-lg-8 text-center">
                                <div className="row">
                                    <div className="col">
                                        <img className="foto" src="../img/details/content/correos1994.jpg"></img>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <small>Pie de página</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2">
                            </div>
                        </div>


                        <div className="row mt-5">
                            <div className="col-lg-2">
                            </div>
                            <div className="col-lg-8">
                                <h3>Título</h3>
                                <p>El servicio postal es un sistema dedicado a transportar documentos escritos, así como paquetes de tamaño pequeño o mediano (encomiendas) alrededor del mundo. Todo envío a través del sistema postal es llamado correo o correspondencia. Los paquetes y las cartas son "envíos postales" que se pueden transportar por tierra, mar, o aire, cada uno con tarifas diferentes dependiendo de la duración de la entrega y el peso.
                                Un sistema postal puede ser privado o estatal. Los sistemas privados a menudo tienen impuestas restricciones por parte de los gobiernos.
                                El 9 de octubre se celebra internacionalmente el Día Mundial del Correo, conmemorando la fundación de la Unión Postal Universal (UPU, por sus siglas en inglés) en el año 1874.1 La comunicación por medio de documentos escritos enviados de un punto a otro con un intermediario data desde aproximadamente la invención de la escritura. Sin embargo, el desarrollo del sistema postal formal surgió mucho más tarde. Los primeros usos documentados de un sistema organizado provienen de Egipto, donde los faraones utilizaban mensajeros para la difusión de sus decretos en el territorio del estado (2400 a. C.). El egiptólogo Gaston Maspero halló, al descifrar ciertos jeroglíficos, que estos eran referencias claras a los correos del faraón. Esta práctica muy probablemente tenga sus raíces en una práctica anterior de mensajería oral.</p>
                            </div>
                            <div className="col-lg-2">
                            </div>
                        </div>


                        <div className="row mt-5">
                            <div className="col-lg-2">
                            </div>
                            <div className="col-lg-2">
                            </div>
                            <div className="col-lg-6 destacado">
                                <h1>2014</h1>
                                <h2>El servicio postal es un sistema dedicado a transportar documentos escritos</h2>
                            </div>
                            <div className="col-lg-2">
                            </div>
                        </div>


                        <div className="row mt-5">
                            <div className="col-lg-2">
                            </div>
                            <div className="col-lg-8">
                                <h3>Título</h3>
                                <p>El servicio postal es un sistema dedicado a transportar documentos escritos, así como paquetes de tamaño pequeño o mediano (encomiendas) alrededor del mundo. Todo envío a través del sistema postal es llamado correo o correspondencia. Los paquetes y las cartas son "envíos postales" que se pueden transportar por tierra, mar, o aire, cada uno con tarifas diferentes dependiendo de la duración de la entrega y el peso.
                                Un sistema postal puede ser privado o estatal. Los sistemas privados a menudo tienen impuestas restricciones por parte de los gobiernos.
                                El 9 de octubre se celebra internacionalmente el Día Mundial del Correo, conmemorando la fundación de la Unión Postal Universal (UPU, por sus siglas en inglés) en el año 1874.1 La comunicación por medio de documentos escritos enviados de un punto a otro con un intermediario data desde aproximadamente la invención de la escritura. Sin embargo, el desarrollo del sistema postal formal surgió mucho más tarde. Los primeros usos documentados de un sistema organizado provienen de Egipto, donde los faraones utilizaban mensajeros para la difusión de sus decretos en el territorio del estado (2400 a. C.). El egiptólogo Gaston Maspero halló, al descifrar ciertos jeroglíficos, que estos eran referencias claras a los correos del faraón. Esta práctica muy probablemente tenga sus raíces en una práctica anterior de mensajería oral.</p>
                            </div>
                            <div className="col-lg-2">
                            </div>
                        </div>


                        <div className="row mt-5">
                            <div className="col-lg-2">
                            </div>
                            <div className="col-lg-8">
                                <div className="video-container">
                                    <iframe className="video" src="https://www.youtube.com/embed/IWjZRJDvks4" frameBorder="0" allowFullScreen></iframe>
                                </div>
                            </div>
                            <div className="col-lg-2">
                            </div>
                        </div>


                        <div className="row mt-5">
                            <div className="col-lg-2">
                            </div>
                            <div className="col-lg-8">
                                <h3>Título</h3>
                                <p>El servicio postal es un sistema dedicado a transportar documentos escritos, así como paquetes de tamaño pequeño o mediano (encomiendas) alrededor del mundo. Todo envío a través del sistema postal es llamado correo o correspondencia. Los paquetes y las cartas son "envíos postales" que se pueden transportar por tierra, mar, o aire, cada uno con tarifas diferentes dependiendo de la duración de la entrega y el peso.
                                Un sistema postal puede ser privado o estatal. Los sistemas privados a menudo tienen impuestas restricciones por parte de los gobiernos.
                                El 9 de octubre se celebra internacionalmente el Día Mundial del Correo, conmemorando la fundación de la Unión Postal Universal (UPU, por sus siglas en inglés) en el año 1874.1 La comunicación por medio de documentos escritos enviados de un punto a otro con un intermediario data desde aproximadamente la invención de la escritura. Sin embargo, el desarrollo del sistema postal formal surgió mucho más tarde. Los primeros usos documentados de un sistema organizado provienen de Egipto, donde los faraones utilizaban mensajeros para la difusión de sus decretos en el territorio del estado (2400 a. C.). El egiptólogo Gaston Maspero halló, al descifrar ciertos jeroglíficos, que estos eran referencias claras a los correos del faraón. Esta práctica muy probablemente tenga sus raíces en una práctica anterior de mensajería oral.</p>
                            </div>
                            <div className="col-lg-2">
                            </div>
                        </div>


                        <div className="row mt-5">
                            <div className="col-lg-2">
                            </div>
                            <div className="col-lg-8 text-center">
                                <div className="row">
                                    <div className="col">
                                        <img className="foto" src="../img/details/content/correos_1.jpg"></img>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <small>Pie de página</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2">
                            </div>
                        </div>



                        <div className="row mt-5">
                            <div className="col-lg-2">
                            </div>
                            <div className="col-lg-8">
                                <h3>Título</h3>
                                <p>El servicio postal es un sistema dedicado a transportar documentos escritos, así como paquetes de tamaño pequeño o mediano (encomiendas) alrededor del mundo. Todo envío a través del sistema postal es llamado correo o correspondencia. Los paquetes y las cartas son "envíos postales" que se pueden transportar por tierra, mar, o aire, cada uno con tarifas diferentes dependiendo de la duración de la entrega y el peso.
                                Un sistema postal puede ser privado o estatal. Los sistemas privados a menudo tienen impuestas restricciones por parte de los gobiernos.
                                El 9 de octubre se celebra internacionalmente el Día Mundial del Correo, conmemorando la fundación de la Unión Postal Universal (UPU, por sus siglas en inglés) en el año 1874.1 La comunicación por medio de documentos escritos enviados de un punto a otro con un intermediario data desde aproximadamente la invención de la escritura. Sin embargo, el desarrollo del sistema postal formal surgió mucho más tarde. Los primeros usos documentados de un sistema organizado provienen de Egipto, donde los faraones utilizaban mensajeros para la difusión de sus decretos en el territorio del estado (2400 a. C.). El egiptólogo Gaston Maspero halló, al descifrar ciertos jeroglíficos, que estos eran referencias claras a los correos del faraón. Esta práctica muy probablemente tenga sus raíces en una práctica anterior de mensajería oral.</p>
                            </div>
                            <div className="col-lg-2">
                            </div>
                        </div>


                        <div className="row mt-5">
                            <div className="col--lg2">
                            </div>
                            <div className="col-lg-6 destacado2">
                                <h1>2020</h1>
                                <h2>El servicio postal es un sistema dedicado a transportar documentos escritos</h2>
                            </div>
                            <div className="col-lg-4">
                            </div>
                        </div>


                        <div className="row mt-5">
                            <div className="col-lg-2">
                            </div>
                            <div className="col-lg-8">
                                <h3>Título</h3>
                                <p>El servicio postal es un sistema dedicado a transportar documentos escritos, así como paquetes de tamaño pequeño o mediano (encomiendas) alrededor del mundo. Todo envío a través del sistema postal es llamado correo o correspondencia. Los paquetes y las cartas son "envíos postales" que se pueden transportar por tierra, mar, o aire, cada uno con tarifas diferentes dependiendo de la duración de la entrega y el peso.
                                Un sistema postal puede ser privado o estatal. Los sistemas privados a menudo tienen impuestas restricciones por parte de los gobiernos.
                                El 9 de octubre se celebra internacionalmente el Día Mundial del Correo, conmemorando la fundación de la Unión Postal Universal (UPU, por sus siglas en inglés) en el año 1874.1 La comunicación por medio de documentos escritos enviados de un punto a otro con un intermediario data desde aproximadamente la invención de la escritura. Sin embargo, el desarrollo del sistema postal formal surgió mucho más tarde. Los primeros usos documentados de un sistema organizado provienen de Egipto, donde los faraones utilizaban mensajeros para la difusión de sus decretos en el territorio del estado (2400 a. C.). El egiptólogo Gaston Maspero halló, al descifrar ciertos jeroglíficos, que estos eran referencias claras a los correos del faraón. Esta práctica muy probablemente tenga sus raíces en una práctica anterior de mensajería oral.</p>
                            </div>
                            <div className="col-lg-2">
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-lg-2">
                            </div>
                            <div className="col-lg-8 text-center">
                                <div className="row">
                                    <div className="col">
                                        <img className="foto" src="../img/details/content/correos_3.jpg"></img>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <small>Pie de página</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2">
                            </div>
                        </div>



                        <div className="row mt-5">
                            <div className="col-lg-2">
                            </div>
                            <div className="col-lg-8">
                                <h3>Título</h3>
                                <p>El servicio postal es un sistema dedicado a transportar documentos escritos, así como paquetes de tamaño pequeño o mediano (encomiendas) alrededor del mundo. Todo envío a través del sistema postal es llamado correo o correspondencia. Los paquetes y las cartas son "envíos postales" que se pueden transportar por tierra, mar, o aire, cada uno con tarifas diferentes dependiendo de la duración de la entrega y el peso.
                                Un sistema postal puede ser privado o estatal. Los sistemas privados a menudo tienen impuestas restricciones por parte de los gobiernos.
                                El 9 de octubre se celebra internacionalmente el Día Mundial del Correo, conmemorando la fundación de la Unión Postal Universal (UPU, por sus siglas en inglés) en el año 1874.1 La comunicación por medio de documentos escritos enviados de un punto a otro con un intermediario data desde aproximadamente la invención de la escritura. Sin embargo, el desarrollo del sistema postal formal surgió mucho más tarde. Los primeros usos documentados de un sistema organizado provienen de Egipto, donde los faraones utilizaban mensajeros para la difusión de sus decretos en el territorio del estado (2400 a. C.). El egiptólogo Gaston Maspero halló, al descifrar ciertos jeroglíficos, que estos eran referencias claras a los correos del faraón. Esta práctica muy probablemente tenga sus raíces en una práctica anterior de mensajería oral.</p>
                            </div>
                            <div className="col-lg-2">
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-lg-2">
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-6 text-left">
                                        <a href="/santander/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" /></svg>  
                                            <img className="logo-detail-bottom" alt={this.state.id} title={this.state.id} src={"../img/logos/" + this.state.id + ".png"} /></a>



                                    </div>
                                    <div className="col-6 text-right">

                                    

                                    <a href="/santander/"><img className="logo-detail-bottom" alt={this.state.id} title={this.state.id} src={"../img/logos/" + this.state.id + ".png"} /> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>  </a>

                                        </div>

                                </div>
                            </div>
                            <div className="col-lg-2">
                            </div>
                        </div>


                    </div>





                </div>
            </>
        );
    }
}

export default Detail;