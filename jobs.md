---
layout: page
title: Jobs
permalink: /jobs/
hideHomeActive: true
---

{% assign jobs = site.data.jobs.items %}
{% assign rejected = jobs | where: "status", "rejected" %}
{% assign assessed = jobs | where: "status", "assessed" %}
{% assign interview = jobs | where: "status", "interview" %}
{% assign waiting = jobs | where: "status", "waiting" %}

<div class="jobs-board">
  <p class="jobs-slogan">Opportunities don’t happen. You create them.</p>
  <p class="jobs-intro">更新于 {{ site.data.jobs.updated }}</p>

  <div class="jobs-summary">
    <div class="jobs-stat jobs-stat--rejected">
      <span class="jobs-stat__num">{{ rejected.size }}</span>
      <span class="jobs-stat__label">❌ 已拒</span>
    </div>
    <div class="jobs-stat jobs-stat--assessed">
      <span class="jobs-stat__num">{{ assessed.size }}</span>
      <span class="jobs-stat__label">● 已测评</span>
    </div>
    <div class="jobs-stat jobs-stat--interview">
      <span class="jobs-stat__num">{{ interview.size }}</span>
      <span class="jobs-stat__label">◆ 已面试</span>
    </div>
    <div class="jobs-stat jobs-stat--waiting">
      <span class="jobs-stat__num">{{ waiting.size }}</span>
      <span class="jobs-stat__label">○ 等待中</span>
    </div>
  </div>

  <div class="jobs-table-wrap">
    <div class="jobs-table" role="table">
      <div class="jobs-thead" role="row">
        <span class="jobs-th jobs-col-location" role="columnheader">地点</span>
        <span class="jobs-th jobs-col-company" role="columnheader">公司</span>
        <span class="jobs-th jobs-col-roles" role="columnheader">岗位</span>
        <span class="jobs-th jobs-col-status" role="columnheader">状态</span>
        <span class="jobs-th jobs-col-progress" role="columnheader">进展</span>
        <span class="jobs-th jobs-col-apply" role="columnheader">投递</span>
      </div>
      {% for job in jobs %}
      <div class="jobs-row" role="row">
        <span class="jobs-td jobs-col-location" role="cell" data-label="地点">{% if job.location %}{{ job.location }}{% else %}—{% endif %}</span>
        <span class="jobs-td jobs-col-company" role="cell" data-label="公司">{{ job.company }}</span>
        <span class="jobs-td jobs-col-roles" role="cell" data-label="岗位">
          {% if job.roles and job.roles.size > 0 %}
            {{ job.roles | join: " · " }}
          {% else %}
            —
          {% endif %}
        </span>
        <span class="jobs-td jobs-col-status" role="cell" data-label="状态">
          {% if job.status == 'rejected' %}
          <span class="jobs-badge jobs-badge--rejected">❌ 已拒</span>
          {% elsif job.status == 'assessed' %}
          <span class="jobs-badge jobs-badge--assessed">● 已测评</span>
          {% elsif job.status == 'interview' %}
          <span class="jobs-badge jobs-badge--interview">◆ 已面试</span>
          {% else %}
          <span class="jobs-badge jobs-badge--waiting">○ 等待中</span>
          {% endif %}
        </span>
        <span class="jobs-td jobs-col-progress" role="cell" data-label="进展">{{ job.progress }}</span>
        <span class="jobs-td jobs-col-apply" role="cell" data-label="投递">
          {% if job.apply_url %}
          <a class="jobs-apply-link" href="{{ job.apply_url }}" target="_blank" rel="noopener">投递 ↗</a>
          {% else %}
          —
          {% endif %}
        </span>
      </div>
      {% endfor %}
    </div>
  </div>
</div>
