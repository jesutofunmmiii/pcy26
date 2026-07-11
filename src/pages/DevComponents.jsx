import React from 'react';
import {
  Badge,
  Button,
  Card,
  Icon,
  IconButton,
  Tag,
  Checkbox,
  Input,
  Radio,
  Select,
  Switch,
  Tabs,
  Dialog,
  Toast,
  Tooltip,
} from '../components/index.js';

// TEMPORARY dev harness for eyeballing every design-system component in all its
// variants. Mounted at /dev/components. Removed in the final QA task (TASKS.md
// Task 9, step 5) — do not link to it from the site.

function Section({ title, children }) {
  return (
    <section style={{ marginBottom: 'var(--space-8)' }}>
      <h2 style={{ margin: '0 0 var(--space-2)' }}>{title}</h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          gap: 'var(--space-5)',
          padding: 'var(--space-5)',
          borderRadius: 'var(--radius-lg)',
          background: 'var(--surface-sunken)',
          border: '1px solid var(--border-default)',
        }}
      >
        {children}
      </div>
    </section>
  );
}

export default function DevComponents() {
  const [checked, setChecked] = React.useState(true);
  const [radio, setRadio] = React.useState('a');
  const [on, setOn] = React.useState(true);
  const [region, setRegion] = React.useState('');
  const [text, setText] = React.useState('');
  const [tab, setTab] = React.useState('all');
  const [tagSelected, setTagSelected] = React.useState(true);
  const [tags, setTags] = React.useState(['East Africa', 'West Africa', 'Southeast Asia']);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  return (
    <main
      style={{
        maxWidth: 'var(--layout-max-width)',
        margin: '0 auto',
        padding: 'var(--space-8) var(--layout-margin)',
      }}
    >
      <p className="eyebrow" style={{ color: 'var(--text-gold-safe)' }}>
        Temporary dev harness
      </p>
      <h1 style={{ margin: 'var(--space-2) 0 var(--space-7)' }}>Design system components</h1>

      <Section title="Badge">
        <Badge variant="neutral">Neutral</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="error">Error</Badge>
        <Badge variant="gold">Gold</Badge>
      </Section>

      <Section title="Button — variants">
        <Button variant="primary">Primary</Button>
        <Button variant="accent">Accent</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="primary" disabled>
          Disabled
        </Button>
      </Section>

      <Section title="Button — sizes & icons">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button icon="arrow-right" iconPosition="end">
          Icon end
        </Button>
        <Button variant="accent" icon="arrow-right" iconPosition="start">
          Icon start
        </Button>
      </Section>

      <Section title="Card">
        <Card style={{ width: 220 }}>
          <h4 style={{ margin: '0 0 4px' }}>Default card</h4>
          <p style={{ margin: 0, fontSize: 14, color: 'var(--text-body)' }}>
            White card with soft shadow.
          </p>
        </Card>
        <Card featureCorner corner="top-left" style={{ width: 220 }}>
          <h4 style={{ margin: '0 0 4px' }}>Feature corner</h4>
          <p style={{ margin: 0, fontSize: 14, color: 'var(--text-body)' }}>top-left</p>
        </Card>
        <Card featureCorner corner="bottom-right" style={{ width: 220 }}>
          <h4 style={{ margin: '0 0 4px' }}>Feature corner</h4>
          <p style={{ margin: 0, fontSize: 14, color: 'var(--text-body)' }}>bottom-right</p>
        </Card>
      </Section>

      <Section title="Icon">
        <Icon name="droplets" size={28} color="var(--green-500)" />
        <Icon name="graduation-cap" size={28} color="var(--green-500)" />
        <Icon name="heart-pulse" size={28} color="var(--green-500)" />
        <Icon name="calendar-days" size={28} color="var(--text-body)" />
        <Icon name="map-pin" size={28} color="var(--text-body)" />
      </Section>

      <Section title="IconButton">
        <IconButton icon="arrow-right" label="Next" variant="primary" />
        <IconButton icon="arrow-left" label="Back" variant="secondary" />
        <IconButton icon="x" label="Close" variant="ghost" />
        <IconButton icon="x" label="Disabled" variant="ghost" disabled />
        <IconButton icon="camera" label="Small" variant="primary" size="sm" />
        <IconButton icon="camera" label="Large" variant="primary" size="lg" />
      </Section>

      <Section title="Tag">
        <Tag>Default</Tag>
        <Tag selected={tagSelected} onClick={() => setTagSelected((s) => !s)}>
          Toggle selected
        </Tag>
        {tags.map((t) => (
          <Tag key={t} removable onRemove={() => setTags((cur) => cur.filter((x) => x !== t))}>
            {t}
          </Tag>
        ))}
      </Section>

      <Section title="Checkbox">
        <Checkbox label="Unchecked" checked={false} onChange={() => {}} />
        <Checkbox label="Checked" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
        <Checkbox label="Disabled" checked disabled onChange={() => {}} />
      </Section>

      <Section title="Radio">
        <Radio name="demo" label="Option A" checked={radio === 'a'} onChange={() => setRadio('a')} />
        <Radio name="demo" label="Option B" checked={radio === 'b'} onChange={() => setRadio('b')} />
        <Radio name="demo" label="Disabled" checked={false} disabled onChange={() => {}} />
      </Section>

      <Section title="Switch">
        <Switch label="Off" checked={false} onChange={() => {}} />
        <Switch label="On" checked={on} onChange={(e) => setOn(e.target.checked)} />
        <Switch label="Disabled" checked disabled onChange={() => {}} />
      </Section>

      <Section title="Input">
        <div style={{ width: 260 }}>
          <Input
            label="Full name"
            placeholder="Jane Mwangi"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div style={{ width: 260 }}>
          <Input label="Email" type="email" placeholder="jane@example.org" helperText="We never share it." />
        </div>
        <div style={{ width: 260 }}>
          <Input label="Phone" placeholder="0700 000 000" error="This field is required." />
        </div>
        <div style={{ width: 260 }}>
          <Input label="Disabled" placeholder="Unavailable" disabled />
        </div>
      </Section>

      <Section title="Select">
        <div style={{ width: 260 }}>
          <Select
            label="Region"
            placeholder="Select a region…"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            options={[
              { value: 'ea', label: 'East Africa' },
              { value: 'wa', label: 'West Africa' },
              { value: 'sea', label: 'Southeast Asia' },
            ]}
          />
        </div>
      </Section>

      <Section title="Tabs">
        <div style={{ width: '100%' }}>
          <Tabs
            value={tab}
            onChange={setTab}
            tabs={[
              { value: 'all', label: 'All programs' },
              { value: 'water', label: 'Water' },
              { value: 'education', label: 'Education' },
              { value: 'health', label: 'Health' },
            ]}
          />
          <p style={{ marginTop: 'var(--space-3)', color: 'var(--text-muted)' }}>
            Active tab: {tab}
          </p>
        </div>
      </Section>

      <Section title="Dialog">
        <Button onClick={() => setDialogOpen(true)}>Open dialog</Button>
        <Dialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          title="Confirm your details"
          footer={
            <>
              <Button variant="secondary" onClick={() => setDialogOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setDialogOpen(false)}>
                Confirm
              </Button>
            </>
          }
        >
          <p style={{ margin: 0, color: 'var(--text-body)' }}>
            A modal dialog with a scrim, header, body and footer actions.
          </p>
        </Dialog>
      </Section>

      <Section title="Toast">
        <Toast variant="success" title="Application received" description="We'll be in touch soon." onClose={() => {}} />
        <Toast variant="error" title="Something went wrong" description="Please try again." onClose={() => {}} />
        <Toast variant="info" title="Heads up" description="Registration closes on 1 March." onClose={() => {}} />
      </Section>

      <Section title="Tooltip">
        <Tooltip label="Tooltip on top" side="top">
          <Button variant="secondary">Hover (top)</Button>
        </Tooltip>
        <Tooltip label="Tooltip on bottom" side="bottom">
          <Button variant="secondary">Hover (bottom)</Button>
        </Tooltip>
      </Section>
    </main>
  );
}
