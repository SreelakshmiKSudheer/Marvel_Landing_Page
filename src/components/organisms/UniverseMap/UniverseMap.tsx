import { SectionHeading } from "../../molecules/SectionHeading/SectionHeading";
import { OrbitNode } from "../../molecules/OrbitNode/OrbitNode";
import { Icon } from "../../atoms/Icon/Icon";
import { universeNodes, universeConnections } from "../../../data/universe";
import type { UniverseMapProps } from "./UniverseMap.types";

export const UniverseMap = ({ title = "The Marvel Universe" }: UniverseMapProps) => {
  const nodeById = Object.fromEntries(universeNodes.map((node) => [node.id, node]));

  return (
    <section className="relative overflow-hidden bg-marvel-black px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-marvel-red/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-360">
        <SectionHeading title={title} centered />

        {/* Desktop: orbital / constellation layout */}
        <div className="relative mt-16 hidden h-[560px] w-full lg:block">
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {universeConnections.map(([fromId, toId]) => {
              const from = nodeById[fromId];
              const to = nodeById[toId];
              if (!from || !to) return null;
              return (
                <line
                  key={`${fromId}-${toId}`}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke="rgba(184,184,184,0.25)"
                  strokeWidth="0.15"
                  strokeDasharray="0.6 0.8"
                />
              );
            })}
          </svg>

          {universeNodes.map((node) => (
            <OrbitNode
              key={node.id}
              title={node.title}
              href={node.href}
              icon={node.icon}
              size={node.size}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            />
          ))}
        </div>

        {/* Mobile / tablet: simple grid fallback */}
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:hidden">
          {universeNodes.map((node) => (
            <a
              key={node.id}
              href={node.href}
              className="group flex flex-col items-center gap-3 text-center"
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full border border-marvel-white/15 bg-[radial-gradient(circle_at_35%_30%,rgba(237,29,36,0.35),rgba(0,0,0,0.9)_70%)] shadow-[0_0_30px_-8px_rgba(237,29,36,0.5)] transition-colors duration-300 group-hover:border-marvel-red">
                <Icon icon={node.icon} size={22} className="text-marvel-white group-hover:text-marvel-red" />
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-marvel-silver group-hover:text-marvel-white">
                {node.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
