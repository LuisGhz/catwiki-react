import React from "react";
import "./Metric.scss";

type MetricProps = {
  label: string;
  value: number;
};

export const Metric = ({ label, value }: MetricProps) => {
  const maxValue = 5;
  const [values, setValue] = React.useState<React.ReactNode[]>([]);
  let content: React.ReactNode[] = [];

  React.useEffect(() => {
    content = [];
    for (let i = 1; i <= maxValue; i++) {
      content.push(
        <span
          key={i}
          className={["level", i <= value ? "level--covered" : ""].join(" ")}
        ></span>
      );
    }
    setValue(content);
  }, [value]);

  return (
    <section className="metric">
      <p className="metric__label">{label}</p>
      <div>{values}</div>
    </section>
  );
};
