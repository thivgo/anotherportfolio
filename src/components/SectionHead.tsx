import type { Motif } from './Azulejo';
import { TileIcon } from './Azulejo';

interface Props {
  label: string;
  title: string;
  motif?: Motif;
  id: string;
}

export function SectionHead({ label, title, motif, id }: Props) {
  return (
    <div className="section-head">
      <p className="section-label">
        <TileIcon motif={motif} className="section-tile" />
        {label}
      </p>
      <h2 id={id} className="section-title">
        {title}
      </h2>
    </div>
  );
}
