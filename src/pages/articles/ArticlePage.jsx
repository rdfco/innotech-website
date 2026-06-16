import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {useTheme} from "../../context/useTheme";
import {fetchArticle} from "../../services/contentApi";

function ArticleSection({section, textColor}) {
  if (section.type === "text") {
    return (
      <section className="flex flex-col gap-4">
        {section.heading ? (
          <h2 className={`font-['Gotham'] text-4xl font-bold ${textColor}`}>
            {section.heading}
          </h2>
        ) : null}
        <p
          className={`whitespace-pre-line font-['Gotham'] text-xl leading-[1.5] ${textColor}`}
        >
          {section.content}
        </p>
      </section>
    );
  }

  return null;
}

function ArticlePage() {
  const {slug} = useParams();
  const {isDarkMode} = useTheme();
  const [result, setResult] = useState({
    article: null,
    slug: null,
    status: "loading",
  });
  const pageBackground = isDarkMode ? "bg-[#050505]" : "bg-white";
  const textColor = isDarkMode ? "text-white" : "text-black";
  const mutedTextColor = isDarkMode ? "text-white/70" : "text-black/60";
  const article = result.slug === slug ? result.article : null;
  const status = result.slug === slug ? result.status : "loading";

  useEffect(() => {
    let isActive = true;

    fetchArticle(slug)
      .then((nextArticle) => {
        if (!isActive) return;
        setResult({
          article: nextArticle,
          slug,
          status: nextArticle ? "ready" : "not-found",
        });
      })
      .catch(() => {
        if (!isActive) return;
        setResult({
          article: null,
          slug,
          status: "not-found",
        });
      });

    return () => {
      isActive = false;
    };
  }, [slug]);

  return (
    <main
      className={`min-h-screen px-6 py-36 transition-colors duration-500 md:px-16 xl:px-[120px] ${pageBackground}`}
    >
      <article className="mx-auto flex w-full max-w-[980px] flex-col gap-10">
        {status === "loading" ? (
          <p className={`font-['Gotham'] text-xl ${mutedTextColor}`}>
            Loading article...
          </p>
        ) : null}

        {status === "not-found" ? (
          <section className="flex flex-col gap-4">
            <h1 className={`font-['Gotham'] text-5xl font-bold ${textColor}`}>
              Article not found
            </h1>
            <p className={`font-['Gotham'] text-xl ${mutedTextColor}`}>
              The requested article is not available yet.
            </p>
          </section>
        ) : null}

        {article ? (
          <>
            <header className="flex flex-col gap-5">
              <p className={`font-['Gotham'] text-base ${mutedTextColor}`}>
                {article.category}
              </p>
              <h1
                className={`font-['Gotham'] text-5xl font-bold leading-none ${textColor}`}
              >
                {article.title}
              </h1>
              {article.subtitle ? (
                <p className={`font-['Gotham'] text-2xl ${mutedTextColor}`}>
                  {article.subtitle}
                </p>
              ) : null}
              <div className="flex gap-6">
                <span className={`font-['Gotham'] text-base ${mutedTextColor}`}>
                  {article.date}
                </span>
                <span className="font-['Gotham'] text-base text-[#37B478]">
                  {article.readTime}
                </span>
              </div>
              <p
                className={`font-['Gotham'] text-xl leading-[1.5] ${textColor}`}
              >
                {article.description}
              </p>
            </header>

            {article.sections.map((section, index) => (
              <ArticleSection
                key={`${section.type}-${section.heading ?? index}`}
                section={section}
                textColor={textColor}
              />
            ))}
          </>
        ) : null}
      </article>
    </main>
  );
}

export default ArticlePage;
