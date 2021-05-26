import React from "react";
import { Link } from "gatsby";
import { Layout } from "../components/common";

const BlogPage = () => (
    <Layout>
        <div className="container">
            <article className="content">
                <h2 className="content-title">Blog</h2>
                <section className="content-body">
                    Page not found, <Link to="/">return home</Link> to start
                    over
                </section>
            </article>
        </div>
    </Layout>
);

export default BlogPage;
