<style>
iframe {
  min-height: 100vh;
  width: 100%;
  border: 0;
  padding: 0;
}
</style>

<!-- <script>
import ejs from 'ejs';
import { thirdTermData } from '$lib/mock/terms';

export let data;

let template = ejs.render(data.template, { data: thirdTermData });
</script>

<h1>hello</h1>
<iframe srcdoc="{template}" title="First Term - New Prime Academy"></iframe> -->
<script lang="ts">
import { firstTermData } from '$lib/mock/terms';
import ejs from 'ejs';

export let data;

let template = ejs.render(data.template, { data: firstTermData });
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
<iframe bind:this="{iframeRef}" srcdoc="{template}" title="First Term - New Prime Academy"></iframe>
