/*
 * Azulejos desenhados à mão em SVG.
 *
 * Cada símbolo é UM QUARTO de um padrão maior: o centro do padrão fica no canto
 * inferior direito (100,100). Quatro peças giradas 0°, 90°, 180° e 270° formam
 * o desenho completo — exatamente como os azulejos de fachada do centro de Belém.
 *
 * Para as emendas baterem com qualquer vizinho, todo desenho é simétrico em
 * relação à diagonal y = x, e os elementos de borda (cantos e meios das arestas)
 * são iguais em todos os motivos.
 */

export const MOTIFS = ['az-rosa', 'az-losango', 'az-folha'] as const;
export type Motif = (typeof MOTIFS)[number];

function Frame() {
  return (
    <g className="az-ink">
      {/* canto (0,0): encontro de quatro peças */}
      <path d="M0 0 H18 A18 18 0 0 1 0 18 Z" />
      <path d="M27 0 A27 27 0 0 1 0 27" fill="none" className="az-stroke" strokeWidth="3" />
      {/* meios das arestas externas */}
      <path d="M42 0 A8 8 0 0 0 58 0 Z" />
      <path d="M0 42 A8 8 0 0 1 0 58 Z" />
      {/* cantos laterais */}
      <path d="M100 0 V10 A10 10 0 0 1 90 0 Z" />
      <path d="M0 100 H10 A10 10 0 0 0 0 90 Z" />
    </g>
  );
}

export function AzulejoDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
      <defs>
        <symbol id="az-rosa" viewBox="0 0 100 100">
          <rect width="100" height="100" className="az-ground" />
          <Frame />
          <g className="az-ink">
            <path d="M70 70 Q48 58 34 34 Q58 48 70 70 Z" />
            <path d="M64 100 Q46 84 28 100 Z" />
            <path d="M100 64 Q84 46 100 28 Z" />
            <path d="M100 66 A34 34 0 0 0 66 100 H100 Z" />
          </g>
          <path d="M100 76 A24 24 0 0 0 76 100 H100 Z" className="az-ground" />
          <path d="M100 87 A13 13 0 0 0 87 100 H100 Z" className="az-ink" />
          <path d="M100 94 A6 6 0 0 0 94 100 H100 Z" className="az-accent" />
          <circle cx="48" cy="80" r="3.2" className="az-ink" />
          <circle cx="80" cy="48" r="3.2" className="az-ink" />
        </symbol>

        <symbol id="az-losango" viewBox="0 0 100 100">
          <rect width="100" height="100" className="az-ground" />
          <Frame />
          <g className="az-ink">
            <path d="M100 44 L44 100 H100 Z" />
          </g>
          <path d="M100 62 L62 100 H100 Z" className="az-ground" />
          <path d="M100 80 L80 100 H100 Z" className="az-ink" />
          <line x1="30" y1="30" x2="58" y2="58" className="az-stroke" strokeWidth="3" />
          <g className="az-ink">
            <path d="M44 44 Q30 48 24 62 Q40 58 44 44 Z" />
            <path d="M44 44 Q48 30 62 24 Q58 40 44 44 Z" />
            <circle cx="64" cy="64" r="4" />
          </g>
        </symbol>

        <symbol id="az-folha" viewBox="0 0 100 100">
          <rect width="100" height="100" className="az-ground" />
          <Frame />
          <path d="M60 100 A40 40 0 0 1 100 60" fill="none" className="az-stroke" strokeWidth="7" />
          <g className="az-ink">
            <path d="M100 82 A18 18 0 0 0 82 100 H100 Z" />
            <path d="M74 74 Q40 66 24 24 Q66 40 74 74 Z" />
            <circle cx="52" cy="86" r="4" />
            <circle cx="86" cy="52" r="4" />
          </g>
        </symbol>
      </defs>
    </svg>
  );
}

/** Rotação base (em quartos de volta) para a peça na linha r, coluna c. */
export function baseTurn(r: number, c: number) {
  const top = r % 2 === 0;
  const left = c % 2 === 0;
  if (top && left) return 0;
  if (top && !left) return 1;
  if (!top && !left) return 2;
  return 3;
}

/** Motivo de cada grupo 2x2: alterna rosa e losango, com folhas espalhadas. */
export function motifFor(r: number, c: number): Motif {
  const gr = Math.floor(r / 2);
  const gc = Math.floor(c / 2);
  if ((gr * 7 + gc * 3) % 5 === 0) return 'az-folha';
  return (gr + gc) % 2 === 0 ? 'az-rosa' : 'az-losango';
}

export function TileIcon({ motif = 'az-rosa', className }: { motif?: Motif; className?: string }) {
  // Quatro quartos formando o padrão inteiro, em tamanho de ícone.
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true" focusable="false">
      <use href={`#${motif}`} width="100" height="100" />
      <use href={`#${motif}`} width="100" height="100" transform="rotate(90 100 100)" />
      <use href={`#${motif}`} width="100" height="100" transform="rotate(180 100 100)" />
      <use href={`#${motif}`} width="100" height="100" transform="rotate(270 100 100)" />
    </svg>
  );
}

/** Faixa de azulejos (o "barrado" das fachadas), usada no rodapé. */
export function Barrado({ size = 44 }: { size?: number }) {
  const s = size;
  return (
    <svg className="barrado" width="100%" height={s * 2} aria-hidden="true" focusable="false">
      <defs>
        <pattern id="barrado-pattern" width={s * 4} height={s * 2} patternUnits="userSpaceOnUse">
          {(['az-rosa', 'az-losango'] as Motif[]).map((m, i) => {
            // Girar o quarto em torno do centro do grupo leva a peça para a
            // posição seguinte já com a rotação certa.
            return (
              <g key={m} transform={`translate(${i * s * 2} 0)`}>
                {[0, 90, 180, 270].map((deg) => (
                  <use key={deg} href={`#${m}`} width={s} height={s} transform={`rotate(${deg} ${s} ${s})`} />
                ))}
              </g>
            );
          })}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#barrado-pattern)" />
    </svg>
  );
}
