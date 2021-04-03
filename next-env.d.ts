/// <reference types="next" />
/// <reference types="next/types/global" />

interface MJMLElement extends React.HTMLElement {}
interface MJMLHeadElement extends React.HTMLElement {}
interface MJMLFontElement extends React.HTMLElement {}
interface MJMLPreviewElement extends React.HTMLElement {}
interface MJMLBodyElement extends React.HTMLElement {}

interface MJMLAttributes<T> extends React.HTMLAttributes<T> {
  owa?: string;
  version?: string;
}

interface MJMLHeadAttributes<T> extends React.HTMLAttributes<T> {}

interface MJMLFontAttributes<T> extends React.HTMLAttributes<T> {
  name: string;
  href: string;
}

interface MJMLPreviewAttributes<T> extends React.HTMLAttributes<T> {}

interface MJMLBodyAttributes<T> extends React.HTMLAttributes<T> {}

declare namespace JSX {
  interface IntrinsicElements {
    mjml: React.DetailedHTMLProps<MJMLAttributes<MJMLElement>, MJMLElement>;

    "mj-head": React.DetailedHTMLProps<
      MJMLHeadAttributes<MJMLHeadElement>,
      MJMLHeadElement
    >;

    "mj-font": React.DetailedHTMLProps<
      MJMLFontAttributes<MJMLFontElement>,
      MJMLFontElement
    >;

    "mj-preview": React.DetailedHTMLProps<
      MJMLPreviewAttributes<MJMLPreviewElement>,
      MJMLPreviewElement
    >;

    "mj-body": React.DetailedHTMLProps<
      MJMLBodyAttributes<MJMLBodyElement>,
      MJMLBodyElement
    >;

    [key: string]: any;
  }
}
