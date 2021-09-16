import dynamic from "next/dynamic";

const HomeTemplate = dynamic(
  () => {
    return import("../src/component/templates/HomeTemplate");
  },
  { ssr: false }
);

export default HomeTemplate;
