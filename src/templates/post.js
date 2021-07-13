import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { Tags } from "@tryghost/helpers-gatsby";

import { Layout } from "../components/common";
import { MetaData } from "../components/common/meta";

import Referral from "../components/common/post/Referral";

/**
 * Single post view (/:slug)
 *
 * This file renders a single post and loads all the content.
 *
 */
const Post = ({ data, location }) => {
    const post = data.ghostPost;
    post.childHtmlRehype.html = post.childHtmlRehype.html.replace(
        /<a/g,
        `<a target="_blank" rel="noopener noreferrer"`
    );

    return (
        <>
            <MetaData data={data} location={location} type="article" />
            <Helmet>
                <style type="text/css">{`${post.codeinjection_styles}`}</style>
            </Helmet>
            <Layout>
                <div className="container">
                    <article className="content">
                        <header class="post-full-header">
                            {post.tags && (
                                <div className="post-card-tags">
                                    {" "}
                                    <Tags
                                        post={post}
                                        visibility="public"
                                        autolink={false}
                                    />
                                </div>
                            )}
                            <h1 className="content-title">{post.title}</h1>
                            <p class="post-full-custom-excerpt">
                                {post.excerpt}
                            </p>
                            <div className="post-full-byline-meta">
                                <div>
                                    <ul class="author-list">
                                        <li class="author-list-item">
                                            <div class="author-card">
                                                {post.primary_author
                                                    .profile_image ? (
                                                    <img
                                                        className="author-avatar"
                                                        src={
                                                            post.primary_author
                                                                .profile_image
                                                        }
                                                        alt={
                                                            post.primary_author
                                                                .name
                                                        }
                                                    />
                                                ) : (
                                                    <img
                                                        className="default-avatar"
                                                        src="/images/icons/avatar.svg"
                                                        alt={
                                                            post.primary_author
                                                                .name
                                                        }
                                                    />
                                                )}
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="author-name">
                                        {post.primary_author.name}
                                    </h4>
                                    <span className="byline-meta-date">
                                        {post.created_at_pretty}
                                    </span>
                                </div>
                            </div>
                        </header>

                        {post.feature_image ? (
                            <figure className="post-feature-image">
                                <img
                                    src={post.feature_image}
                                    alt={post.title}
                                />
                            </figure>
                        ) : null}

                        <section className="post-full-content">
                            {/* The main post content */}
                            <section
                                className="content-body load-external-scripts"
                                dangerouslySetInnerHTML={{
                                    __html: post.childHtmlRehype.html,
                                }}
                            />
                            <Referral />
                        </section>
                    </article>
                </div>
            </Layout>
        </>
    );
};

Post.propTypes = {
    data: PropTypes.shape({
        ghostPost: PropTypes.shape({
            codeinjection_styles: PropTypes.object,
            title: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired,
            childHtmlRehype: PropTypes.shape({
                html: PropTypes.string.isRequired,
            }),
            feature_image: PropTypes.string,
            created_at_pretty: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
};

export default Post;

export const postQuery = graphql`
    query($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
            ...GhostPostFields
        }
    }
`;
