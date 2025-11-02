interface Tech {
  name: string;
  icon?: string;
}

interface TechStackListProps {
  techStack: Tech[];
  maxItems?: number;
}

export const TechStackList = ({
  techStack,
  maxItems = 6,
}: TechStackListProps) => {
  return (
    <div className="mt-3 flex max-w-2xl flex-wrap justify-start gap-2">
      {techStack.slice(0, maxItems).map((tech) => (
        <span
          key={tech.name}
          className="text-foreground bg-background inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs"
        >
          {tech.icon && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={tech.icon}
              alt={tech.name}
              className="h-4 w-4 grayscale dark:invert"
            />
          )}
          {tech.name}
        </span>
      ))}
    </div>
  );
};
