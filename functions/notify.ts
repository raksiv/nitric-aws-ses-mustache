import { messageSub} from "../common/resources";
import { notify } from "../common/notify";

// Subscribers
messageSub.subscribe(notify);
