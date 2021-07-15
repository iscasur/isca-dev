import React from "react";
import * as Styles from "./Referral.module.css";

function Referral() {
    return (
        <>
            <section className={Styles.referral}>
                <div className="container">
                    <p>
                        Entré a <a href="https://isca.dev/platzi">Platzi</a> y
                        en esta pandamia logré 50+ certificaciones (en
                        desarrollo web, desarollo personal e inglés). Si te
                        animas crecer profesionalmente te dejo un{" "}
                        <strong>
                            código exclusivo con un 30% de descuento
                        </strong>{" "}
                        para 2 personas (válido hasta el 31/07/2021).
                    </p>
                    <p>
                        <a
                            className={Styles.button}
                            href="https://isca.dev/platzi"
                        >
                            Obtener descuento
                        </a>
                    </p>
                </div>
            </section>
        </>
    );
}

export default Referral;
