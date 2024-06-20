import { SortOrder } from "../../util/SortOrder";

export type ProcessedPostOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  processedAt?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
