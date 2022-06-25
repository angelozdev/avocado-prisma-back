import AvoList from "./avo-list";
import AvoItem from "./avo-item";
import styles from "./avo-list.module.css";

interface Props {
  count: number;
}

function AvoListPlaceholder({ count }: Props) {
  return (
    <AvoList>
      {Array.from({ length: count }, (_, i) => (
        <AvoItem.Container key={i}>
          <div>
            <div
              style={{ height: "10rem", borderRadius: 0 }}
              className={styles["placeholder"]}
            />
          </div>

          <AvoItem.Details>
            <AvoItem.Title>
              <span
                style={{
                  height: "1rem",
                }}
                className={styles["placeholder"]}
              />
            </AvoItem.Title>
            <AvoItem.Description>
              <span
                style={{
                  height: "6rem",
                }}
                className={styles["placeholder"]}
              />
            </AvoItem.Description>
          </AvoItem.Details>
        </AvoItem.Container>
      ))}
    </AvoList>
  );
}

export default AvoListPlaceholder;
