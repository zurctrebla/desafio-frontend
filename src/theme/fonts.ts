export interface FontsInterface {
  fontFamily: string;
  styles: {
    [key: string]: string;
  };
  weight: {
    normal: string;
    bold: string;
    extrabold: string;
    semibold: string;
  };
}

const fonts: FontsInterface = {
  fontFamily: "Inter, sans-serif",
  styles: {
    24: "1.5rem",
    20: "1.25rem",
    18: "1.125rem",
    16: "1rem",
    14: "0.875rem",
    12: "0.75rem",
    10: "0.625rem",
    8: "0.5rem",
    4: "0.25rem",
    2: "0.125rem",
    1: "0.0625rem",
  },
  weight: {
    normal: "400",
    bold: "700",
    extrabold: "800",
    semibold: "600",
  },
};

export default fonts;
