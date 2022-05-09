import classNames from "classnames";
export function StatusPill({ value }) {
    const status = value ? value.toLowerCase() : "unknown";
    return (
      <span
        className={classNames(
          "px-3 py-1 uppercase leading-wide font-bold text-xs rounded-full shadow-sm",
          status.startsWith("common") ? "bg-gray-400 text-gray-600" : null,
          status.startsWith("mythic") ? "bg-orange-300 text-yellow-700" : null,
          status.startsWith("rare") ? "bg-yellow-200 text-amber-500 " : null,
          status.startsWith("uncommon") ? "bg-stone-300 text-gray-500 " : null,
        )}
      >
        {status}
      </span>
    );
  }