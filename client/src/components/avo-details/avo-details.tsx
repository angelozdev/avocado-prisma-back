import React, { ImgHTMLAttributes, PropsWithChildren } from "react";
import { GetAvoByIdQuery } from "../../generated/graphql";
import styles from "./avo-details.module.css";

type Props = NonNullable<GetAvoByIdQuery["GetAvoById"]>;
type ImageProps = ImgHTMLAttributes<HTMLImageElement>;
type LayoutProps = PropsWithChildren<{ leftSide: React.ReactNode }>;
type DateProps = { children: number; prefix?: string };
type PriceProps = { children: number };

function AvoDetails({
  name,
  description,
  image,
  createdAt,
  updatedAt,
  price,
}: Props) {
  return (
    <Container>
      <Title>{name}</Title>
      <Layout leftSide={<Image alt={name} src={image} />}>
        <Description>{description}</Description>
        <Price>{price}</Price>
        <DateComponent prefix="Created at: ">{createdAt}</DateComponent>
        <DateComponent prefix="Updated at: ">{updatedAt}</DateComponent>
      </Layout>
    </Container>
  );
}

function Container({ children }: PropsWithChildren) {
  return <section>{children}</section>;
}

function Price({ children }: PriceProps) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(children);

  return <p className={styles["price"]}>{formattedPrice}</p>;
}

function Title({ children }: PropsWithChildren) {
  const title = typeof children === "string" ? children : undefined;
  return <h1 title={title}>{children}</h1>;
}

function Description({ children }: PropsWithChildren) {
  const description = typeof children === "string" ? children : undefined;
  return <p title={description}>{children}</p>;
}

function Image({ src, ...rest }: ImageProps) {
  const image = `${import.meta.env.VITE_IMAGE_URL}${src}`;
  return <img className={styles["image"]} src={image} {...rest} />;
}

function DateComponent({ children, prefix }: DateProps) {
  const date = new Date(children);
  return (
    <time className={styles["time"]}>
      {prefix} {date.toUTCString()}
    </time>
  );
}

function Layout({ children, leftSide }: LayoutProps) {
  return (
    <div className={styles["layout"]}>
      <div className={styles["layout-main-container"]}>{children}</div>
      <figure className={styles["image-container"]}>{leftSide}</figure>
    </div>
  );
}

export default AvoDetails;
