import { HttpError } from "@refinedev/core";
import { Create, useAutocomplete } from "@refinedev/mui";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useForm } from "@refinedev/react-hook-form";

import { Controller } from "react-hook-form";

export const ProductCreate = () => {
  const {
    saveButtonProps,
    refineCore: { queryResult, autoSaveProps },
    register,
    control,
    formState: { errors },
  } = useForm();

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Box
      component="form"
      sx={{ display: "flex", flexDirection: "column" }}
      autoComplete="off"
      >
        <TextField
            id="name"
            {...register("name", {
                required: "This field is required",
            })}
            error={!!errors.name}
            helperText={errors.name?.message}
            margin="normal"
            fullWidth
            label="Name"
            name="name"
            autoFocus
        />
        <TextField
            id="material"
            {...register("material", {
                required: "This field is required",
            })}
            error={!!errors.material}
            helperText={errors.material?.message}
            margin="normal"
            fullWidth
            label="Material"
            name="material"
            autoFocus
        />
        <TextField
          id="description"
          {...register("description", {
              required: "This field is required",
          })}
          error={!!errors.description}
          helperText={errors.description?.message}
          margin="normal"
          label="Description"
          multiline
          rows={4}
        />
        <TextField
            id="price"
            {...register("price", {
                required: "This field is required",
            })}
            error={!!errors.price}
            helperText={errors.price?.message}
            margin="normal"
            fullWidth
            label="Price"
            name="price"
            autoFocus
        />
      </Box>
  </Create>
  );
};