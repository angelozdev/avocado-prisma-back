import { Link } from "@tanstack/react-location";
import { ImgHTMLAttributes, PropsWithChildren } from "react";
import { GetAvosQuery } from "../../generated/graphql";
import styles from "./avo-list.module.css";

interface Props {
  avo: NonNullable<GetAvosQuery["GetAvos"][0]>;
}

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

function AvoItem({ avo }: Props) {
  const { name, description, image, id } = avo;
  return (
    <Container>
      <Link to={`/avos/${id}`}>
        <Image src={image} alt={name} />
      </Link>
      <Details>
        <Title>{name}</Title>
        <Description>{description}</Description>
      </Details>
    </Container>
  );
}

function Container({ children }: PropsWithChildren) {
  return <li className={styles["list-item"]}>{children}</li>;
}

function Image({ src, className, ...props }: ImageProps) {
  const source = `${import.meta.env.VITE_IMAGE_URL}/${src}`;
  return (
    <img
      width={100}
      height={100}
      className={[styles["image"], className].join(" ")}
      src={source}
      {...props}
    />
  );
}

function Details({ children }: PropsWithChildren) {
  return <div className={styles["details"]}>{children}</div>;
}

function Title({ children }: PropsWithChildren) {
  return <h2 className={styles["title"]}>{children}</h2>;
}

function Description({ children }: PropsWithChildren) {
  const title = typeof children === "string" ? children : undefined;
  return (
    <p title={title} className={styles["description"]}>
      {children}
    </p>
  );
}

AvoItem.Container = Container;
AvoItem.Description = Description;
AvoItem.Details = Details;
AvoItem.Image = Image;
AvoItem.Title = Title;

export default AvoItem;
