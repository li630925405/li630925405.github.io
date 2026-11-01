---
layout: page
permalink: /publications/
title: Publications
description: Conference papers and manuscripts in spatial audio, room acoustics, and sound field control.
nav: true
nav_order: 2
---
<p class="publication-intro">See also <a href="https://scholar.google.com/citations?user={{ site.scholar_userid }}">Google Scholar</a>. <a href="{{ '/assets/bibliography/papers.bib' | relative_url }}" download>Download published-paper BibTeX</a>.</p>

## Manuscript under submission

<div class="publications">
{% bibliography -f {{ site.scholar.bibliography }} --group_by none --query @unpublished %}
</div>

## Conference papers

<div class="publications">
{% bibliography -f {{ site.scholar.bibliography }} --group_by none --query @inproceedings %}
</div>
