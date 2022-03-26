&lt;template&gt;
&lt;Switch v-model:value=&quot;bool&quot; /&gt;
&lt;/template&gt;
&lt;script lang=&quot;ts&quot;&gt;
import Switch from '../lib/Switch.vue'
import {
  ref
} from 'vue'
export default {
  components: {
    Switch,
  },
  setup() {
    const bool = ref(false)
    return {
      bool
    }
  }
}
&lt;/script&gt;