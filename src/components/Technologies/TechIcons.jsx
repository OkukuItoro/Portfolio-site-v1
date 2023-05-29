import React from "react";
import { IconContext } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiNextDotJs,
  SiReact,
  SiTailwindcss,
  SiSass,
  SiApollographql,
  SiJest,
  SiRedux,
  SiNodeDotJs,
  SiPostman,
  SiStrapi,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiDocker,
  SiKubernetes,
  SiGitlab,
  SiAmazonaws,
} from "react-icons/si";

const TechIcons = ({ icon }) => {
  const getIconComponent = (icon) => {
    switch (icon) {
      case "JS | TS":
        return [<SiJavascript />, <SiTypescript />];
      case "React.js | Next.js":
        return [<SiReact />, <SiNextDotJs />];
      case "Tailwind | SASS/SCSS":
        return [<SiTailwindcss />, <SiSass />];
      case "Apollo Client":
        return <SiApollographql />;
      case "Jest & RTL":
        return <SiJest />;
      case "Redux":
        return <SiRedux />;
      case "Node.js":
        return <SiNodeDotJs />;
      case "Postman":
        return <SiPostman />;
      case "Strapi":
        return <SiStrapi />;
      case "MongoDB":
        return <SiMongodb />;
      case "Postgres":
        return <SiPostgresql />;
      case "REST | GraphQL":
        return <SiGraphql />;
      case "Docker":
        return <SiDocker />;
      case "Kubernetes":
        return <SiKubernetes />;
      case "GitLabs":
        return <SiGitlab />;
      case "AWS CodePipeline":
        return <SiAmazonaws />;
      default:
        return;
    }
  };

  return (
    <div>
      <IconContext.Provider value={{ size: "2rem" }}>
        <div>{getIconComponent(icon)}</div>
      </IconContext.Provider>
    </div>
  );
};

export default TechIcons;
