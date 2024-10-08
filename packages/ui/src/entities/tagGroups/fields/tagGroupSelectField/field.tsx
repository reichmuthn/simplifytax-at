"use client";
import React from "react";
import { MultipleSelector, SelectOption } from "@ui/components/ui/multi-select";
import { searchTagGroups } from "@ui/entities/tagGroups/fields/tagGroupSelectField/actions";

const TagGroupSelectField = ({
  onChange,
  defaultValue,
  maxSelected,
}: {
  onChange: (value: string[]) => void;
  defaultValue: SelectOption[];
  maxSelected?: number;
}) => {
  const [selected, setSelected] = React.useState<SelectOption[]>();

  React.useEffect(() => {
    if (!selected && defaultValue) setSelected(defaultValue);
  }, [selected, defaultValue]);

  const handleSelect = (options: SelectOption[]) => {
    setSelected(options);
    onChange(options.map((x) => x.value));
  };

  return (
    <MultipleSelector
      className={"bg-background"}
      maxSelected={maxSelected}
      value={selected}
      onChange={handleSelect}
      onSearch={async (value) => {
        return await searchTagGroups(value);
      }}
      triggerSearchOnFocus
      defaultOptions={defaultValue}
      hidePlaceholderWhenSelected
      placeholder="Suche nach Tag Gruppen..."
      loadingIndicator={
        <p className="py-2 text-center text-lg leading-10 text-muted-foreground">
          Suche...
        </p>
      }
      emptyIndicator={
        <p className="w-full text-center text-lg leading-10 text-muted-foreground">
          Keine Tag Gruppen gefunden.
        </p>
      }
    />
  );
};

export { TagGroupSelectField };