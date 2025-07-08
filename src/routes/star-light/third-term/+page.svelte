<style>
iframe {
  min-height: 100vh;
  width: 100%;
  border: 0;
  padding: 0;
}
</style>

<script lang="ts">
import { thirdTermData } from '$lib/mock/star';
import ejs from 'ejs';

export let data;

let template = ejs.render(data.template, { data: thirdTermData });
let iframeRef: any;

// Function to handle the print action
function handlePrint() {
  if (iframeRef && iframeRef.contentWindow) {
    iframeRef.contentWindow.focus();
    iframeRef.contentWindow.print();
  }
}
</script>

<button on:click="{handlePrint}">Print</button>
<iframe bind:this="{iframeRef}" srcdoc="{template}" title="Third Term - Light"></iframe>
