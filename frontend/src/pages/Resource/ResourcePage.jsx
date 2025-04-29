import React from "react";
import "./ResourcePage.css";
import Navbar from "../../components/Navbar/Navbar";

const codingResources = [
    {
        category: "Programming Languages",
        items: [
            {
                title: "Pluralsight: Top Programming Languages 2025",
                url: "https://www.pluralsight.com/resources/blog/upskilling/top-programming-languages-2025",
                description:
                    "Overview of the most popular programming languages in 2025 including Python, Java, JavaScript, and Go.",
            },
            {
                title: "YouTube: Top Programming Languages to Learn in 2025",
                url: "https://www.youtube.com/watch?v=NClmyC6olC0",
                description:
                    "Video guide covering the top programming languages and their career prospects.",
            },
            {
                title: "Crossover Blog: Future Programming Languages for 2025",
                url: "https://www.crossover.com/blog/future-programming-languages-for-2025",
                description:
                    "Insightful article on the future of programming languages and trends.",
            },
        ],
    },
    {
        category: "AI Tools & Libraries",
        items: [
            {
                title: "TensorFlow Official Tutorials",
                url: "https://www.tensorflow.org/tutorials",
                description:
                    "Learn machine learning and AI with TensorFlow’s official tutorials.",
            },
            {
                title: "PyTorch Tutorials",
                url: "https://pytorch.org/tutorials/",
                description:
                    "Comprehensive tutorials for deep learning with PyTorch.",
            },
            {
                title: "OpenAI API Documentation",
                url: "https://platform.openai.com/docs/",
                description:
                    "Official docs for using OpenAI’s powerful language models in your projects.",
            },
        ],
    },
    {
        category: "AI Coding Assistants",
        items: [
            {
                title: "GitHub Copilot",
                url: "https://github.com/features/copilot",
                description:
                    "AI-powered code completion tool that integrates with your IDE.",
            },
            {
                title: "Tabnine",
                url: "https://www.tabnine.com/",
                description:
                    "AI code completion assistant supporting multiple languages and editors.",
            },
        ],
    },
];

export default function ResourcePage() {
    return (
        <>
        <Navbar/>
         <div className="resource-page">
        <header className="page-header">
            <h1>Resources & Guides</h1>
            <p>Curated resources to help you master AI-assisted coding</p>
        </header>

        <div className="resource-grid">
            {codingResources.map((section) => (
                <div key={section.category} className="resource-card">
                    <h2 className="resource-category-title">{section.category}</h2>
                    <ul className="resource-list">
                        {section.items.map((item) => (
                            <li key={item.url} className="resource-item">
                                <a href={item.url} target="_blank" rel="noopener noreferrer">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </div>
    </>
       
    );
}
