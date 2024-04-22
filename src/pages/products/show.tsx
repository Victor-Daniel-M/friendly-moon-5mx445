import {
  Show,
  NumberField,
  TextFieldComponent as TextField,
  MarkdownField,
  DateField,
} from "@refinedev/mui";
import { useShow } from "@refinedev/core";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export const ProductShow = () => {
  const { queryResult } = useShow();
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Stack gap={1}>
        <Typography variant="body1" fontWeight="bold">
            Id
        </Typography>
        <NumberField value={record?.id ?? ""} />
        <Typography variant="body1" fontWeight="bold">
            Name
        </Typography>
        <TextField value={record?.name} />
        <Typography variant="body1" fontWeight="bold">
            Material
        </Typography>
        <TextField value={record?.material} />
        <Typography variant="body1" fontWeight="bold">
            Description
        </Typography>
        <MarkdownField value={record?.description} />
        <Typography variant="body1" fontWeight="bold">
            Price
        </Typography>
        <NumberField value={record?.price}  options={{ style: "currency", currency: "USD" }} />
      </Stack>
    </Show>
  );
};