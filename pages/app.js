import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Rnd from "../components/core/Rnd";
import { LeftBar, Editor } from "../components";
import { getTemplate } from "../components/helper";
import queryString from "query-string";

const app = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    const { template } = queryString.parse(window.location.search);

    setData(getTemplate(template));
  }, []);

  const code = data && {
    value: (
      <>
        <Rnd width={650} x={37} y={166}>
          <h1
            className={`${data.title.fontFamily}`}
            style={{
              fontSize: `${data.title.fontSize}px`,
              fontFamily: `${data.title.fontFamily.replace(/-/g, " ")}`,
              fontWeight: data.title.fontWeight,
              color: data.title.color,
              lineHeight: `${data.title.lineHeight}px`,
            }}
          >
            {data.title.text}
          </h1>
        </Rnd>
        <Rnd width={650} x={46} y={305}>
          <h1
            className={`${data.tagline.fontFamily}`}
            style={{
              fontSize: `${data.tagline.fontSize}px`,
              fontFamily: `${data.tagline.fontFamily.replace(/-/g, " ")}`,
              fontWeight: data.tagline.fontWeight,
              color: data.tagline.color,
              lineHeight: `${data.tagline.lineHeight}px`,
            }}
          >
            {data.tagline.text}
          </h1>
        </Rnd>
        <Rnd width="auto" x={900} y={400}>
          <i
            class={`devicon-${data.icon.name}-plain`}
            style={{
              fontSize: `${data.icon.fontSize}px`,
              color: data.icon.color,
            }}
          />
        </Rnd>
      </>
    ),
  };

  const [children, setChildren] = useState([]);

  return (
    <div className="w-full h-[100vh] flex overflow-hidden">
      {data ? (
        <>
          <LeftBar
            {...props}
            data={data}
            setData={setData}
            children={children}
            setChildren={setChildren}
          />{" "}
          <Editor
            {...props}
            data={data}
            setData={setData}
            children={children}
            code={code}
          />
        </>
      ) : (
        "loading"
      )}
    </div>
  );
};

export default app;
