import React from 'react';
import BlogCard from '../../components/Blogcard';
import IMAGES from '../../Constants/Images';
import BlogCard2 from '../../components/BlogCard2';
import { BlogsData } from './BlogsData';

const Section = () => {
    const blogs = BlogsData.sort((a, b) => b.id - a.id).map(blog => ({
        imageUrl: blog.images[0] || IMAGES.BLOGHERO,
        title: blog.title,
        excerpt: blog.titleDescription[0] || blog.metaDescription,
        author: "Sarah Johnson",
        commentsCount: Math.floor(Math.random() * 100) + 10, // Random for now
        date: blog.date,
        blogId: blog.id
    }));

    return (
        <section className="section-container ">
            <div className="flex flex-wrap -mx-3 mt-6 sm:mt-12 mb-6 " >
                {blogs.map((blog) => (
                    <BlogCard2
                        key={blog.blogId}
                        imageUrl={blog.imageUrl}
                        title={blog.title}
                        excerpt={blog.excerpt}
                        author={blog.author}
                        commentsCount={blog.commentsCount}
                        date={blog.date}
                        blogId={blog.blogId}
                    />
                ))}
            </div>
        </section>
    );
};

export default Section;
