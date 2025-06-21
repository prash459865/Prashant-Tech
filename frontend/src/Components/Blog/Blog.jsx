import React from 'react'
import './Blog.css'
import blog_1 from '../../assets/blog-1.jpg'

const latestPost = [
    {
        image: blog_1,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem repellat animi recusandae?'
    },
    {
        image: blog_1,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem repellat animi recusandae?'
    },
    {
        image: blog_1,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem repellat animi recusandae?'
    },
    {
        image: blog_1,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem repellat animi recusandae?'
    },
    {
        image: blog_1,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem repellat animi recusandae?'
    },
]

const allComments = [
    {
       image:'',
        name:"Abhay Kumar",
       Comment:"Eveniet accusamus tempora suscipit qui, facilis dolor veniam autem expedita fugit voluptatibus.",
       date:'2 Feb 2025',
    },
    {
       image:'',
        name:"Akash Kumar",
       Comment:"Eveniet accusamus tempora suscipit qui, facilis dolor veniam autem expedita fugit voluptatibus.",
       date:'3 Feb 2025',
    },
    {
       image:'',
        name:"Vijay Rawat",
       Comment:"Eveniet accusamus tempora suscipit qui, facilis dolor veniam autem expedita fugit voluptatibus.",
       date:'5 Feb 2025',
    },
]

const Blog = () => {
    return (
        <div className='blog-component'>
            <div className='blog-container'>
                <div className='blog-details'>
                    <div className='image-container-of-blog'>
                        <img src={blog_1} alt="" />
                    </div>
                    <h1>Diam dolor est labore duo ipsum clita sed et lorem tempor duo</h1>

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem repellat animi recusandae? Ratione a deleniti, expedita non doloribus repellendus doloremque debitis aliquam iusto aliquid dolore, totam nulla blanditiis, aperiam molestiae!
                        Ipsum magni, tempora blanditiis quos molestias doloribus magnam consequuntur nulla, nemo provident ab laudantium unde tempore iste assumenda eveniet maiores perspiciatis voluptatibus beatae! Beatae deleniti culpa aliquid! Repellat, nesciunt asperiores.
                        Quo eveniet accusamus tempora suscipit qui, facilis dolor veniam autem expedita fugit voluptatibus. Corrupti dolorum ipsa ullam nemo necessitatibus modi. Quisquam neque maxime id eveniet est maiores magnam atque dignissimos?
                        In perspiciatis nam assumenda aliquam eaque, quaerat nisi maxime nihil, quia, reprehenderit possimus magni consequatur qui adipisci incidunt. Veniam aliquid esse sint explicabo, ipsum tempora earum deserunt quia possimus quam.
                        Fugiat sed impedit, perspiciatis aspernatur architecto similique minima vel, nihil cum deleniti magnam? Autem consectetur quibusdam tenetur quod atque quidem! Voluptate natus laboriosam, magni facilis mollitia nam rem voluptatum quo?</p>

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem repellat animi recusandae? Ratione a deleniti, expedita non doloribus repellendus doloremque debitis aliquam iusto aliquid dolore, totam nulla blanditiis, aperiam molestiae!
                        Ipsum magni, tempora blanditiis quos molestias doloribus magnam consequuntur nulla, nemo provident ab laudantium unde tempore iste assumenda eveniet maiores perspiciatis voluptatibus beatae! Beatae deleniti culpa aliquid! Repellat, nesciunt asperiores.
                        Quo eveniet accusamus tempora suscipit qui, facilis dolor veniam autem expedita fugit voluptatibus. Corrupti dolorum ipsa ullam nemo necessitatibus modi. Quisquam neque maxime id eveniet est maiores magnam atque dignissimos?
                        In perspiciatis nam assumenda aliquam eaque, quaerat nisi maxime nihil, quia, reprehenderit possimus magni consequatur qui adipisci incidunt. Veniam aliquid esse sint explicabo, ipsum tempora earum deserunt quia possimus quam.
                        Fugiat sed impedit, perspiciatis aspernatur architecto similique minima vel, nihil cum deleniti magnam? Autem consectetur quibusdam tenetur quod atque quidem! Voluptate natus laboriosam, magni facilis mollitia nam rem voluptatum quo?</p>

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem repellat animi recusandae? Ratione a deleniti, expedita non doloribus repellendus doloremque debitis aliquam iusto aliquid dolore, totam nulla blanditiis, aperiam molestiae!
                        Ipsum magni, tempora blanditiis quos molestias doloribus magnam consequuntur nulla, nemo provident ab laudantium unde tempore iste assumenda eveniet maiores perspiciatis voluptatibus beatae! Beatae deleniti culpa aliquid! Repellat, nesciunt asperiores.
                        Quo eveniet accusamus tempora suscipit qui, facilis dolor veniam autem expedita fugit voluptatibus. Corrupti dolorum ipsa ullam nemo necessitatibus modi. Quisquam neque maxime id eveniet est maiores magnam atque dignissimos?
                        In perspiciatis nam assumenda aliquam eaque, quaerat nisi maxime nihil, quia, reprehenderit possimus magni consequatur qui adipisci incidunt. Veniam aliquid esse sint explicabo, ipsum tempora earum deserunt quia possimus quam.
                        Fugiat sed impedit, perspiciatis aspernatur architecto similique minima vel, nihil cum deleniti magnam? Autem consectetur quibusdam tenetur quod atque quidem! Voluptate natus laboriosam, magni facilis mollitia nam rem voluptatum quo?</p>
                     
                     <div className='comments'>
                        <h2>Comments</h2>
                         <div className='all-comments'>
                            {
                                allComments.map((comment,index)=>(
                                    <div className='particular-comment'>
                                        <img src="" alt="" />
                                        <div>
                                            <p><strong>{comment.name}</strong></p>
                                            <p><i>{comment.Comment}</i></p>
                                            <p>{comment.date}</p>
                                            <button>Reply</button>
                                        </div>
                            
                                    </div>
                                ))
                            }
                         </div>
                         <div className='add-comment'>
                             <h2>Leave A Comment</h2>
                             <div className='comment-box'>
                                <span>
                                    <input type="text" placeholder='Name'/>
                                    <input type="text" placeholder='email'/>
                                </span>
                                <input type="text" placeholder='comment'/>
                                <button>Post</button>
                             </div>
                         </div>
                     </div>
                </div>
                <div className='related-content'>
                    <h2>Recent Posts</h2>
                    <div className='all-recent-posts'>
                        {
                            latestPost.map((post,index)=>(
                                <div key={index} className='particular-recent-blog'>
                                    <img src={post.image} alt="" />
                                    <p>{post.description}</p>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
