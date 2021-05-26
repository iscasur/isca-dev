import React from "react";
import { useStaticQuery, graphql } from "gatsby";

function Presentation() {
    const data = useStaticQuery(graphql`
        {
            allGhostSettings {
                edges {
                    node {
                        title
                    }
                }
            }
        }
    `);

    const site = data.allGhostSettings.edges[0].node;

    return (
        <>
            <section className="intro">
                <div className="container">
                    <div>
                        <h2>Hi, my name is {site.title}</h2>
                        <p>And I am a frontend developer</p>
                    </div>
                    <div>
                        <img
                            src="https://www.gravatar.com/avatar/e77a4e18cccdc0e7ecc6235afae39a5f?s=200"
                            alt={site.title}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Presentation;
