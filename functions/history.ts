import { messageSub} from "../common/resources";
import { addToHistory } from "../common/event-history";

// Subscribers
messageSub.subscribe(addToHistory);
