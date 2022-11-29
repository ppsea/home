import HeadLayout, { TSeo } from "./Head";

type Props = {
  children: React.ReactNode;
  seo: TSeo;
  lang?: TLang;
};

export type TLang = "ko" | "en";

export default function Layout(props: Props) {
  return (
    <>
      <HeadLayout seo={props.seo} lang={props.lang ? props.lang : "ko"} />
      {props.children}
    </>
  );
}
